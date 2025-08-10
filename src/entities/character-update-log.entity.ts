import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { VirtualCharacter } from './virtual-character.entity';

export enum UpdateType {
  MAJOR = 'major',
  MINOR = 'minor',
  PATCH = 'patch'
}

@Entity('character_update_logs')
@Index('idx_character_version', ['characterId', 'versionTo'])
@Index('idx_release_date', ['releaseDate'])
export class CharacterUpdateLog {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'log_id', unsigned: true })
  logId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'varchar', length: 20, nullable: true, name: 'version_from' })
  versionFrom: string;

  @Column({ type: 'varchar', length: 20, name: 'version_to' })
  versionTo: string;

  @Column({
    type: 'enum',
    enum: UpdateType,
    default: UpdateType.PATCH,
    name: 'update_type'
  })
  updateType: UpdateType;

  @Column({ type: 'varchar', length: 200, nullable: true, name: 'update_title' })
  updateTitle: string;

  @Column({ type: 'text', nullable: true, name: 'update_notes' })
  updateNotes: string;

  @Column({ type: 'text', nullable: true, name: 'new_features' })
  newFeatures: string;

  @Column({ type: 'text', nullable: true, name: 'bug_fixes' })
  bugFixes: string;

  @Column({ type: 'bigint', nullable: true, name: 'file_size_delta' })
  fileSizeDelta: number;

  @Column({ type: 'boolean', default: false, name: 'is_forced' })
  isForced: boolean;

  @CreateDateColumn({ name: 'release_date' })
  releaseDate: Date;

  // Relations
  @ManyToOne(() => VirtualCharacter, character => character.updateLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;
}