import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';

@Entity('password_reset_tokens')
@Index('idx_token', ['token'], { unique: true })
@Index('idx_user_token', ['userId', 'used', 'expiresAt'])
export class PasswordResetToken {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'token_id', unsigned: true })
  tokenId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  token: string;

  @Column({ type: 'datetime', name: 'expires_at' })
  expiresAt: Date;

  @Column({ type: 'boolean', default: false })
  used: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Relations
  @ManyToOne(() => User, user => user.passwordResetTokens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}