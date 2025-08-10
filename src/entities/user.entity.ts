import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { UserRole } from './user-role.entity';
import { LoginHistory } from './login-history.entity';
import { UserSession } from './user-session.entity';
import { PasswordResetToken } from './password-reset-token.entity';
import { UserPreference } from './user-preference.entity';
import { UserDevice } from './user-device.entity';
import { UserCharacterDownload } from './user-character-download.entity';
import { UserSceneProgress } from './user-scene-progress.entity';
import { CharacterReview } from './character-review.entity';
import { UserPurchase } from './user-purchase.entity';

@Entity('app_user')
@Index('idx_status', ['status'])
@Index('idx_create_time', ['createTime'])
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 20, nullable: true, unique: true })
  mobile: string;

  @Column({ type: 'varchar', length: 100, nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, name: 'password_hash' })
  passwordHash: string;

  @Column({ type: 'varchar', length: 50, default: '' })
  nickname: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'avatar_url' })
  avatarUrl: string;

  @Column({ type: 'tinyint', default: 0 })
  gender: number; // 0: unknown, 1: male, 2: female

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ type: 'tinyint', default: 1 })
  status: number; // 1: active, 0: inactive

  @Column({ type: 'varchar', length: 45, nullable: true, name: 'last_login_ip' })
  lastLoginIp: string;

  @Column({ type: 'datetime', nullable: true, name: 'last_login_time' })
  lastLoginTime: Date;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  @Column({ type: 'boolean', default: false })
  deleted: boolean;

  // Relations
  @OneToMany(() => UserRole, userRole => userRole.user)
  roles: UserRole[];

  @OneToMany(() => LoginHistory, history => history.user)
  loginHistory: LoginHistory[];

  @OneToMany(() => UserSession, session => session.user)
  sessions: UserSession[];

  @OneToMany(() => PasswordResetToken, token => token.user)
  passwordResetTokens: PasswordResetToken[];

  @OneToMany(() => UserPreference, preference => preference.user)
  preferences: UserPreference[];

  @OneToMany(() => UserDevice, userDevice => userDevice.user)
  devices: UserDevice[];

  @OneToMany(() => UserCharacterDownload, download => download.user)
  characterDownloads: UserCharacterDownload[];

  @OneToMany(() => UserSceneProgress, progress => progress.user)
  sceneProgress: UserSceneProgress[];

  @OneToMany(() => CharacterReview, review => review.user)
  characterReviews: CharacterReview[];

  @OneToMany(() => UserPurchase, purchase => purchase.user)
  purchases: UserPurchase[];
}