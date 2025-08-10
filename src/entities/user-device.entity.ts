import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index, Unique } from 'typeorm';
import { User } from './user.entity';
import { Device } from './device.entity';

export enum ConnectionStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  CONNECTING = 'connecting',
  ERROR = 'error'
}

@Entity('user_device')
@Unique('unique_user_device', ['userId', 'deviceId'])
@Index('idx_user_id', ['userId'])
@Index('idx_device_id', ['deviceId'])
@Index('idx_connection_status', ['connectionStatus'])
export class UserDevice {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'bigint', name: 'device_id', unsigned: true })
  deviceId: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nickname: string;

  @Column({ type: 'int', nullable: true, name: 'battery_level' })
  batteryLevel: number;

  @Column({
    type: 'enum',
    enum: ConnectionStatus,
    default: ConnectionStatus.OFFLINE,
    name: 'connection_status'
  })
  connectionStatus: ConnectionStatus;

  @Column({ type: 'datetime', nullable: true, name: 'last_connected' })
  lastConnected: Date;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @ManyToOne(() => User, user => user.devices, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Device, device => device.userDevices, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'device_id' })
  device: Device;
}