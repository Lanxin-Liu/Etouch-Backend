import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn, Index, Unique } from 'typeorm';
import { VirtualCharacter } from './virtual-character.entity';
import { SceneActionTemplate } from './scene-action-template.entity';
import { UserSceneProgress } from './user-scene-progress.entity';
import { VibrationSequence } from './vibration-sequence.entity';

@Entity('story_scene')
@Unique('unique_character_order', ['characterId', 'orderIndex'])
@Index('idx_character_id', ['characterId'])
@Index('idx_order', ['characterId', 'orderIndex'])
export class StoryScene {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'scene_id', unsigned: true })
  sceneId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', default: 0, name: 'order_index' })
  orderIndex: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'animation_url' })
  animationUrl: string;

  @Column({ type: 'boolean', default: false, name: 'requires_previous' })
  requiresPrevious: boolean;

  @Column({ type: 'boolean', default: true, name: 'is_official' })
  isOfficial: boolean;

  @Column({ type: 'varchar', length: 50, default: 'interaction', name: 'scene_type' })
  sceneType: string;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column({ type: 'json', nullable: true, name: 'unlock_condition' })
  unlockCondition: any;

  @Column({ type: 'bigint', unsigned: true, nullable: true, name: 'sequence_id' })
  sequenceId: number;

  @Column({ type: 'int', default: 0, name: 'vibration_start_delay_ms' })
  vibrationStartDelayMs: number;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @ManyToOne(() => VirtualCharacter, character => character.scenes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;

  @ManyToOne(() => VibrationSequence, sequence => sequence.scenes, { nullable: true })
  @JoinColumn({ name: 'sequence_id' })
  sequence: VibrationSequence;

  @OneToMany(() => SceneActionTemplate, template => template.scene)
  actionTemplates: SceneActionTemplate[];

  @OneToMany(() => UserSceneProgress, progress => progress.scene)
  userProgress: UserSceneProgress[];
}