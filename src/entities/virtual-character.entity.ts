import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { StoryScene } from './story-scene.entity';
import { UserCharacterDownload } from './user-character-download.entity';
import { CharacterReview } from './character-review.entity';
import { CharacterUpdateLog } from './character-update-log.entity';
import { UserPurchase } from './user-purchase.entity';

@Entity('virtual_character')
@Index('idx_category', ['category'])
@Index('idx_is_published', ['isPublished'])
@Index('idx_is_free', ['isFree'])
export class VirtualCharacter {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'model_url' })
  modelUrl: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'preview_image' })
  previewImage: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'animation_pack' })
  animationPack: string;

  @Column({ type: 'bigint', nullable: true, name: 'file_size' })
  fileSize: number;

  @Column({ type: 'varchar', length: 20, default: '1.0.0' })
  version: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  category: string;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @Column({ type: 'boolean', default: true, name: 'is_free' })
  isFree: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column({ type: 'int', default: 0, name: 'download_count' })
  downloadCount: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  rating: number;

  @Column({ type: 'boolean', default: true, name: 'is_published' })
  isPublished: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  developer: string;

  @Column({ type: 'bigint', nullable: true, name: 'created_by', unsigned: true })
  createdBy: number;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @OneToMany(() => StoryScene, scene => scene.character)
  scenes: StoryScene[];

  @OneToMany(() => UserCharacterDownload, download => download.character)
  downloads: UserCharacterDownload[];

  @OneToMany(() => CharacterReview, review => review.character)
  reviews: CharacterReview[];

  @OneToMany(() => CharacterUpdateLog, log => log.character)
  updateLogs: CharacterUpdateLog[];

  @OneToMany(() => UserPurchase, purchase => purchase.character)
  purchases: UserPurchase[];
}