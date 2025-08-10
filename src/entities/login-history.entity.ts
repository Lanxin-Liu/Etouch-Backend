import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';

export enum LoginMethod {
  USERNAME = 'username',
  MOBILE = 'mobile',
  EMAIL = 'email'
}

export enum LoginStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

@Entity('login_history')
@Index('idx_user_login', ['userId', 'loginTime'])
@Index('idx_login_time', ['loginTime'])
export class LoginHistory {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'history_id', unsigned: true })
  historyId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @CreateDateColumn({ name: 'login_time' })
  loginTime: Date;

  @Column({ type: 'varchar', length: 45, nullable: true, name: 'login_ip' })
  loginIp: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'user_agent' })
  userAgent: string;

  @Column({
    type: 'enum',
    enum: LoginMethod,
    name: 'login_method'
  })
  loginMethod: LoginMethod;

  @Column({
    type: 'enum',
    enum: LoginStatus
  })
  status: LoginStatus;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'failure_reason' })
  failureReason: string;

  // Relations
  @ManyToOne(() => User, user => user.loginHistory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}