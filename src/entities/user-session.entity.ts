import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';

@Entity('user_sessions')
@Index('idx_user_sessions', ['userId', 'isActive'])
@Index('idx_expires', ['expiresAt'])
export class UserSession {
  @PrimaryColumn({ type: 'varchar', length: 128, name: 'session_id' })
  sessionId: string;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'json', nullable: true, name: 'device_info' })
  deviceInfo: any;

  @Column({ type: 'varchar', length: 45, nullable: true, name: 'ip_address' })
  ipAddress: string;

  @Column({ type: 'datetime', name: 'expires_at' })
  expiresAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'last_activity' })
  lastActivity: Date;

  @Column({ type: 'boolean', default: true, name: 'is_active' })
  isActive: boolean;

  // Relations
  @ManyToOne(() => User, user => user.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}