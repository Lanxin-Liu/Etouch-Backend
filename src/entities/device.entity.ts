import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { UserDevice } from './user-device.entity';

export enum DeviceType {
  SMART_LIGHT = 'smart_light',
  SMART_SPEAKER = 'smart_speaker',
  SMART_TV = 'smart_tv',
  SMART_LOCK = 'smart_lock',
  SMART_THERMOSTAT = 'smart_thermostat',
  SMART_CAMERA = 'smart_camera',
  OTHER = 'other'
}

@Entity('device')
@Index('idx_device_type', ['deviceType'])
@Index('idx_create_time', ['createTime'])
export class Device {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'device_id', unsigned: true })
  deviceId: number;

  @Column({ type: 'varchar', length: 100, name: 'device_name' })
  deviceName: string;

  @Column({
    type: 'enum',
    enum: DeviceType,
    name: 'device_type'
  })
  deviceType: DeviceType;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'icon_url' })
  iconUrl: string;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'model_number' })
  modelNumber: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'firmware_version' })
  firmwareVersion: string;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @OneToMany(() => UserDevice, userDevice => userDevice.device)
  userDevices: UserDevice[];
}