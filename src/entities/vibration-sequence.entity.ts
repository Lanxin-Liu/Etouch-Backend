import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';
import { VibrationStep } from './vibration-step.entity';
import { AudioFile } from './audio-file.entity';
import { StoryScene } from './story-scene.entity';

export enum SequenceType {
  AUDIO_SYNC = 'audio_sync',
  SCENE_SYNC = 'scene_sync',
  CUSTOM = 'custom',
  PRESET = 'preset'
}

@Entity('vibration_sequence')
@Index('idx_sequence_type', ['sequenceType'])
@Index('idx_category', ['category'])
@Index('idx_created_by', ['createdBy'])
export class VibrationSequence {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'sequence_id', unsigned: true })
  sequenceId: number;

  @Column({ type: 'varchar', length: 100, name: 'name' })
  name: string;

  @Column({ type: 'text', nullable: true, name: 'description' })
  description: string;

  @Column({
    type: 'enum',
    enum: SequenceType,
    name: 'sequence_type'
  })
  sequenceType: SequenceType;

  @Column({ type: 'int', unsigned: true, name: 'total_duration_ms' })
  totalDurationMs: number;

  @Column({ type: 'boolean', default: false, name: 'loop_enabled' })
  loopEnabled: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'category' })
  category: string;

  @Column({ type: 'boolean', default: false, name: 'is_public' })
  isPublic: boolean;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'created_by' })
  createdBy: number;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  creator: User;

  @OneToMany(() => VibrationStep, step => step.sequence)
  steps: VibrationStep[];

  @OneToMany(() => AudioFile, audio => audio.sequence)
  audioFiles: AudioFile[];

  @OneToMany(() => StoryScene, scene => scene.sequence)
  scenes: StoryScene[];
}