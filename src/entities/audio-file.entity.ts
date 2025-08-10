import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';
import { VibrationSequence } from './vibration-sequence.entity';
import { AudioPlayHistory } from './audio-play-history.entity';

@Entity('audio_file')
@Index('idx_category', ['category'])
@Index('idx_uploaded_by', ['uploadedBy'])
@Index('idx_create_time', ['createTime'])
export class AudioFile {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'audio_id', unsigned: true })
  audioId: number;

  @Column({ type: 'varchar', length: 200, name: 'title' })
  title: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'artist' })
  artist: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'album' })
  album: string;

  @Column({ type: 'int', unsigned: true, name: 'duration_seconds' })
  durationSeconds: number;

  @Column({ type: 'varchar', length: 500, name: 'file_url' })
  fileUrl: string;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'file_size' })
  fileSize: number;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'format' })
  format: string;

  @Column({ type: 'int', unsigned: true, nullable: true, name: 'sample_rate' })
  sampleRate: number;

  @Column({ type: 'int', unsigned: true, nullable: true, name: 'bit_rate' })
  bitRate: number;

  @Column({ type: 'json', nullable: true, name: 'waveform_data' })
  waveformData: any;

  @Column({ type: 'int', unsigned: true, nullable: true, name: 'bpm' })
  bpm: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true, name: 'energy_level' })
  energyLevel: number;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'category' })
  category: string;

  @Column({ type: 'varchar', length: 500, nullable: true, name: 'tags' })
  tags: string;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'uploaded_by' })
  uploadedBy: number;

  @Column({ type: 'boolean', default: false, name: 'is_public' })
  isPublic: boolean;

  @Column({ type: 'int', unsigned: true, default: 0, name: 'play_count' })
  playCount: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'sequence_id' })
  sequenceId: number;

  @Column({ type: 'boolean', default: true, name: 'auto_sync_enabled' })
  autoSyncEnabled: boolean;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'uploaded_by' })
  uploader: User;

  @ManyToOne(() => VibrationSequence, sequence => sequence.audioFiles, { nullable: true })
  @JoinColumn({ name: 'sequence_id' })
  sequence: VibrationSequence;

  @OneToMany(() => AudioPlayHistory, history => history.audio)
  playHistory: AudioPlayHistory[];
}