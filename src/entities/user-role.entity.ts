import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';

@Entity('user_roles')
@Index('idx_user_id', ['userId'])
@Index('idx_role_name', ['roleName'])
export class UserRole {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'role_id', unsigned: true })
  roleId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'varchar', length: 50, name: 'role_name' })
  roleName: string;

  @Column({ type: 'json', nullable: true })
  permissions: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations
  @ManyToOne(() => User, user => user.roles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}