import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index, Unique } from 'typeorm';
import { VibrationSequence } from './vibration-sequence.entity';

export enum StepPatternType {
  CONSTANT = 'constant',
  PULSE = 'pulse',
  WAVE = 'wave',
  FADE_IN = 'fade_in',
  FADE_OUT = 'fade_out'
}

@Entity('vibration_step')
@Index('idx_sequence_id', ['sequenceId'])
@Index('idx_start_time', ['startTimeMs'])
@Unique('uk_sequence_order', ['sequenceId', 'stepOrder'])
export class VibrationStep {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'step_id', unsigned: true })
  stepId: number;

  @Column({ type: 'bigint', unsigned: true, name: 'sequence_id' })
  sequenceId: number;

  @Column({ type: 'int', unsigned: true, name: 'step_order' })
  stepOrder: number;

  @Column({ type: 'int', unsigned: true, name: 'start_time_ms' })
  startTimeMs: number;

  @Column({ type: 'int', unsigned: true, name: 'duration_ms' })
  durationMs: number;

  @Column({ type: 'int', unsigned: true, name: 'intensity' })
  intensity: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, name: 'frequency' })
  frequency: number;

  @Column({
    type: 'enum',
    enum: StepPatternType,
    default: StepPatternType.CONSTANT,
    name: 'pattern_type'
  })
  patternType: StepPatternType;

  @Column({ type: 'json', nullable: true, name: 'pattern_params' })
  patternParams: any;

  // Relations
  @ManyToOne(() => VibrationSequence, sequence => sequence.steps, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sequence_id' })
  sequence: VibrationSequence;
}