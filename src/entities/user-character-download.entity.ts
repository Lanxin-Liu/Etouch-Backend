import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index, Unique } from 'typeorm';
import { User } from './user.entity';
import { VirtualCharacter } from './virtual-character.entity';

@Entity('user_character_downloads')
@Unique('unique_user_character', ['userId', 'characterId'])
@Index('idx_user_downloads', ['userId', 'isActive'])
@Index('idx_favorites', ['userId', 'isFavorite'])
@Index('idx_last_used', ['userId', 'lastUsed'])
export class UserCharacterDownload {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'download_id', unsigned: true })
  downloadId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'version_downloaded' })
  versionDownloaded: string;

  @CreateDateColumn({ name: 'download_time' })
  downloadTime: Date;

  @UpdateDateColumn({ name: 'last_updated' })
  lastUpdated: Date;

  @Column({ type: 'boolean', default: false, name: 'is_favorite' })
  isFavorite: boolean;

  @Column({ type: 'boolean', default: true, name: 'is_active' })
  isActive: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'storage_path' })
  storagePath: string;

  @Column({ type: 'int', default: 0, name: 'usage_count' })
  usageCount: number;

  @Column({ type: 'datetime', nullable: true, name: 'last_used' })
  lastUsed: Date;

  // Relations
  @ManyToOne(() => User, user => user.characterDownloads, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => VirtualCharacter, character => character.downloads, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;
}