import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index, Unique } from 'typeorm';
import { User } from './user.entity';
import { StoryScene } from './story-scene.entity';
import { VirtualCharacter } from './virtual-character.entity';

@Entity('user_scene_progress')
@Unique('unique_user_scene', ['userId', 'sceneId'])
@Index('idx_user_progress', ['userId', 'characterId'])
@Index('idx_completion', ['userId', 'isCompleted'])
export class UserSceneProgress {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'progress_id', unsigned: true })
  progressId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'bigint', name: 'scene_id', unsigned: true })
  sceneId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'boolean', default: false, name: 'is_unlocked' })
  isUnlocked: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_completed' })
  isCompleted: boolean;

  @Column({ type: 'int', default: 0, name: 'completion_count' })
  completionCount: number;

  @Column({ type: 'datetime', nullable: true, name: 'first_completed_at' })
  firstCompletedAt: Date;

  @Column({ type: 'datetime', nullable: true, name: 'last_played_at' })
  lastPlayedAt: Date;

  @Column({ type: 'int', default: 0, name: 'play_duration' })
  playDuration: number;

  @Column({ type: 'json', nullable: true, name: 'achievement_data' })
  achievementData: any;

  @Column({ type: 'json', nullable: true, name: 'custom_settings' })
  customSettings: any;

  // Relations
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => StoryScene, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'scene_id' })
  scene: StoryScene;

  @ManyToOne(() => VirtualCharacter, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;
}