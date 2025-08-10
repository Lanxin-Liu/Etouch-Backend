import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { StoryScene } from './story-scene.entity';

export enum ActionType {
  BLUETOOTH = 'bluetooth',
  ANIMATION = 'animation',
  SOUND = 'sound',
  VIBRATION = 'vibration'
}

@Entity('scene_action_templates')
@Index('idx_scene_actions', ['sceneId', 'triggerTime'])
@Index('idx_action_type', ['actionType'])
export class SceneActionTemplate {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'template_id', unsigned: true })
  templateId: number;

  @Column({ type: 'bigint', name: 'scene_id', unsigned: true })
  sceneId: number;

  @Column({ type: 'varchar', length: 100, name: 'action_name' })
  actionName: string;

  @Column({
    type: 'enum',
    enum: ActionType,
    default: ActionType.BLUETOOTH,
    name: 'action_type'
  })
  actionType: ActionType;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'device_type' })
  deviceType: string;

  @Column({ type: 'varchar', length: 36, nullable: true, name: 'device_service_uuid' })
  deviceServiceUuid: string;

  @Column({ type: 'varchar', length: 36, nullable: true, name: 'device_characteristic_uuid' })
  deviceCharacteristicUuid: string;

  @Column({ type: 'json', name: 'action_data' })
  actionData: any;

  @Column({ type: 'int', default: 0, name: 'trigger_time' })
  triggerTime: number;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column({ type: 'boolean', default: false, name: 'is_optional' })
  isOptional: boolean;

  @Column({ type: 'int', default: 0 })
  priority: number;

  // Relations
  @ManyToOne(() => StoryScene, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'scene_id' })
  scene: StoryScene;
}