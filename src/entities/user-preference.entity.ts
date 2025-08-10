import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';

@Entity('user_preferences')
@Index('idx_user_key', ['userId', 'preferenceKey'], { unique: true })
export class UserPreference {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'preference_id', unsigned: true })
  preferenceId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'varchar', length: 100, name: 'preference_key' })
  preferenceKey: string;

  @Column({ type: 'json', nullable: true, name: 'preference_value' })
  preferenceValue: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations
  @ManyToOne(() => User, user => user.preferences, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}