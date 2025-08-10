import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AudioFile,
  VibrationSequence,
  VibrationStep,
  AudioPlayHistory,
  SequenceType,
  StepPatternType,
} from '../../entities';
import {
  CreateAudioDto,
  UpdateAudioDto,
  CreateVibrationSequenceDto,
  AudioFilterDto,
  PlayAudioDto,
} from './dto';

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(AudioFile)
    private audioRepository: Repository<AudioFile>,
    @InjectRepository(VibrationSequence)
    private sequenceRepository: Repository<VibrationSequence>,
    @InjectRepository(VibrationStep)
    private stepRepository: Repository<VibrationStep>,
    @InjectRepository(AudioPlayHistory)
    private historyRepository: Repository<AudioPlayHistory>,
  ) {}

  // Audio Management
  async createAudio(userId: number, createAudioDto: CreateAudioDto): Promise<AudioFile> {
    const audio = this.audioRepository.create({
      ...createAudioDto,
      uploadedBy: userId,
    });

    const savedAudio = await this.audioRepository.save(audio);

    // Auto-generate vibration sequence based on audio properties
    if (createAudioDto.autoGenerateSequence) {
      await this.generateAutoSequence(savedAudio);
    }

    return savedAudio;
  }

  async findAllAudio(filter?: AudioFilterDto) {
    const query = this.audioRepository.createQueryBuilder('audio')
      .leftJoinAndSelect('audio.sequence', 'sequence')
      .leftJoinAndSelect('sequence.steps', 'steps');

    if (filter?.category) {
      query.andWhere('audio.category = :category', { category: filter.category });
    }

    if (filter?.isPublic !== undefined) {
      query.andWhere('audio.isPublic = :isPublic', { isPublic: filter.isPublic });
    }

    if (filter?.search) {
      query.andWhere(
        '(audio.title LIKE :search OR audio.artist LIKE :search OR audio.tags LIKE :search)',
        { search: `%${filter.search}%` }
      );
    }

    if (filter?.minBpm && filter?.maxBpm) {
      query.andWhere('audio.bpm BETWEEN :minBpm AND :maxBpm', {
        minBpm: filter.minBpm,
        maxBpm: filter.maxBpm,
      });
    }

    const sortBy = filter?.sortBy || 'createTime';
    const sortOrder = filter?.sortOrder || 'DESC';
    query.orderBy(`audio.${sortBy}`, sortOrder);

    const [audios, total] = await query
      .skip(filter?.skip || 0)
      .take(filter?.take || 20)
      .getManyAndCount();

    return { audios, total };
  }

  async findAudioById(audioId: number): Promise<AudioFile> {
    const audio = await this.audioRepository.findOne({
      where: { audioId },
      relations: ['sequence', 'sequence.steps'],
    });

    if (!audio) {
      throw new NotFoundException('Audio not found');
    }

    return audio;
  }

  async updateAudio(audioId: number, updateAudioDto: UpdateAudioDto): Promise<AudioFile> {
    const audio = await this.findAudioById(audioId);
    Object.assign(audio, updateAudioDto);
    return this.audioRepository.save(audio);
  }

  async deleteAudio(audioId: number): Promise<void> {
    const result = await this.audioRepository.delete(audioId);
    if (result.affected === 0) {
      throw new NotFoundException('Audio not found');
    }
  }

  // Vibration Sequence Management
  async createVibrationSequence(
    userId: number,
    createSequenceDto: CreateVibrationSequenceDto,
  ): Promise<VibrationSequence> {
    const sequence = this.sequenceRepository.create({
      ...createSequenceDto,
      createdBy: userId,
      isPublic: false,
    });

    return this.sequenceRepository.save(sequence);
  }

  async findAllSequences(isPublic?: boolean) {
    const where: any = {};
    if (isPublic !== undefined) {
      where.isPublic = isPublic;
    }

    return this.sequenceRepository.find({
      where,
      relations: ['steps'],
      order: { createTime: 'DESC' },
    });
  }

  async findSequenceById(sequenceId: number): Promise<VibrationSequence> {
    const sequence = await this.sequenceRepository.findOne({
      where: { sequenceId },
      relations: ['steps'],
    });

    if (!sequence) {
      throw new NotFoundException('Sequence not found');
    }

    return sequence;
  }

  // Audio-Vibration Sequence Assignment
  async assignSequenceToAudio(audioId: number, sequenceId: number): Promise<AudioFile> {
    const audio = await this.findAudioById(audioId);
    await this.findSequenceById(sequenceId);

    audio.sequenceId = sequenceId;
    return this.audioRepository.save(audio);
  }

  async removeSequenceFromAudio(audioId: number): Promise<AudioFile> {
    const audio = await this.findAudioById(audioId);
    audio.sequenceId = null as any; // Handle TypeORM null assignment
    return this.audioRepository.save(audio);
  }

  // Audio Analysis & Auto Pattern Generation
  async analyzeAudio(audioId: number): Promise<any> {
    const audio = await this.findAudioById(audioId);

    // Simulate audio analysis (in real app, use audio processing library)
    const analysis = {
      bpm: audio.bpm || this.detectBPM(audio),
      energyLevel: audio.energyLevel || this.analyzeEnergy(audio),
      peakMoments: this.detectPeaks(audio),
      recommendedSequences: await this.recommendSequences(audio),
    };

    // Update audio with analysis results
    audio.bpm = analysis.bpm;
    audio.energyLevel = analysis.energyLevel;
    await this.audioRepository.save(audio);

    return analysis;
  }

  private async generateAutoSequence(audio: AudioFile): Promise<void> {
    // Determine sequence based on audio characteristics
    let sequenceType: SequenceType;
    let baseIntensity: number;
    let frequency: number;

    if (audio.bpm && audio.bpm > 120) {
      // Fast tempo - rhythmic sequence
      sequenceType = SequenceType.AUDIO_SYNC;
      baseIntensity = 70;
      frequency = audio.bpm / 60; // Convert BPM to Hz
    } else if (audio.energyLevel && audio.energyLevel < 0.3) {
      // Low energy - gentle sequence
      sequenceType = SequenceType.AUDIO_SYNC;
      baseIntensity = 30;
      frequency = 0.5;
    } else {
      // Default - custom sequence
      sequenceType = SequenceType.CUSTOM;
      baseIntensity = 50;
      frequency = 1.0;
    }

    // Find or create suitable sequence
    let sequence = await this.sequenceRepository.findOne({
      where: {
        sequenceType,
        isPublic: true,
      },
    });

    if (!sequence) {
      // Create a new sequence for this audio
      sequence = this.sequenceRepository.create({
        name: `Auto-${audio.title}`,
        description: `Auto-generated sequence for ${audio.title}`,
        sequenceType,
        totalDurationMs: audio.durationSeconds * 1000,
        loopEnabled: false,
        category: audio.category,
        isPublic: false,
        createdBy: audio.uploadedBy,
      });
      sequence = await this.sequenceRepository.save(sequence);

      // Create vibration steps
      const steps = [];
      const stepDuration = 1000; // 1 second per step
      const numSteps = Math.floor(audio.durationSeconds);

      for (let i = 0; i < numSteps; i++) {
        const step = this.stepRepository.create({
          sequenceId: sequence.sequenceId,
          stepOrder: i,
          startTimeMs: i * stepDuration,
          durationMs: stepDuration,
          intensity: baseIntensity + (Math.sin(i * frequency) * 20),
          frequency,
          patternType: StepPatternType.PULSE,
        });
        steps.push(step);
      }
      await this.stepRepository.save(steps);
    }

    if (sequence) {
      audio.sequenceId = sequence.sequenceId;
      audio.autoSyncEnabled = true;
      await this.audioRepository.save(audio);
    }
  }

  private detectBPM(audio: AudioFile): number {
    // Placeholder for BPM detection algorithm
    // In real implementation, use audio processing library
    return Math.floor(Math.random() * 80) + 60; // Random between 60-140
  }

  private analyzeEnergy(audio: AudioFile): number {
    // Placeholder for energy analysis
    // In real implementation, analyze audio waveform
    return Math.random(); // Random between 0-1
  }

  private detectPeaks(audio: AudioFile): number[] {
    // Placeholder for peak detection
    // Return timestamps of peak moments in seconds
    const peaks = [];
    for (let i = 30; i < audio.durationSeconds; i += 30) {
      peaks.push(i);
    }
    return peaks;
  }

  private async recommendSequences(audio: AudioFile): Promise<VibrationSequence[]> {
    const sequences = await this.sequenceRepository.find({
      where: { 
        sequenceType: SequenceType.AUDIO_SYNC,
        isPublic: true 
      },
      take: 3,
    });
    return sequences;
  }

  // Play & History
  async playAudio(userId: number, playDto: PlayAudioDto): Promise<AudioPlayHistory> {
    const audio = await this.findAudioById(playDto.audioId);

    // Increment play count
    audio.playCount++;
    await this.audioRepository.save(audio);

    // Create history record
    const history = this.historyRepository.create({
      userId,
      audioId: playDto.audioId,
      deviceId: playDto.deviceId,
      patternId: playDto.sequenceId,
      deviceConnected: playDto.deviceConnected || false,
    });

    return this.historyRepository.save(history);
  }

  async completePlayback(historyId: number, duration: number): Promise<void> {
    const history = await this.historyRepository.findOne({
      where: { historyId },
    });

    if (history) {
      history.playDuration = duration;
      history.completed = true;
      await this.historyRepository.save(history);
    }
  }

  async getUserPlayHistory(userId: number, limit = 50) {
    return this.historyRepository.find({
      where: { userId },
      relations: ['audio', 'sequence', 'device'],
      order: { playTime: 'DESC' },
      take: limit,
    });
  }

  // Get recommended audio based on play history
  async getRecommendedAudio(userId: number) {
    // Get user's most played categories
    const history = await this.historyRepository
      .createQueryBuilder('history')
      .leftJoin('history.audio', 'audio')
      .select('audio.category', 'category')
      .addSelect('COUNT(*)', 'count')
      .where('history.userId = :userId', { userId })
      .groupBy('audio.category')
      .orderBy('count', 'DESC')
      .limit(3)
      .getRawMany();

    const categories = history.map(h => h.category).filter(c => c);

    if (categories.length === 0) {
      // Return popular audio if no history
      return this.audioRepository.find({
        where: { isPublic: true },
        order: { playCount: 'DESC' },
        take: 10,
      });
    }

    // Get audio from preferred categories
    return this.audioRepository
      .createQueryBuilder('audio')
      .where('audio.category IN (:...categories)', { categories })
      .andWhere('audio.isPublic = :isPublic', { isPublic: true })
      .orderBy('audio.rating', 'DESC')
      .addOrderBy('audio.playCount', 'DESC')
      .take(10)
      .getMany();
  }
}