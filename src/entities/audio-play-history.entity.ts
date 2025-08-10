import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';
import { AudioFile } from './audio-file.entity';
import { Device } from './device.entity';
import { VibrationSequence } from './vibration-sequence.entity';

@Entity('audio_play_history')
@Index('idx_user_audio', ['userId', 'audioId'])
@Index('idx_play_time', ['playTime'])
export class AudioPlayHistory {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'history_id', unsigned: true })
  historyId: number;

  @Column({ type: 'bigint', unsigned: true, name: 'user_id' })
  userId: number;

  @Column({ type: 'bigint', unsigned: true, name: 'audio_id' })
  audioId: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'device_id' })
  deviceId: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'pattern_id' })
  patternId: number;

  @Column({ type: 'int', unsigned: true, nullable: true, name: 'play_duration' })
  playDuration: number;

  @Column({ type: 'boolean', default: false, name: 'completed' })
  completed: boolean;

  @Column({ type: 'boolean', default: false, name: 'device_connected' })
  deviceConnected: boolean;

  @CreateDateColumn({ name: 'play_time' })
  playTime: Date;

  // Relations
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => AudioFile, audio => audio.playHistory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'audio_id' })
  audio: AudioFile;

  @ManyToOne(() => Device, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'device_id' })
  device: Device;

  @ManyToOne(() => VibrationSequence, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'pattern_id' })
  sequence: VibrationSequence;
}