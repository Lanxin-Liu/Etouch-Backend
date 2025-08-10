import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index, Unique } from 'typeorm';
import { User } from './user.entity';
import { VirtualCharacter } from './virtual-character.entity';

@Entity('character_reviews')
@Unique('unique_user_review', ['userId', 'characterId'])
@Index('idx_character_rating', ['characterId', 'rating'])
@Index('idx_helpful', ['helpfulCount'])
export class CharacterReview {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'review_id', unsigned: true })
  reviewId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'tinyint' })
  rating: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'text', nullable: true })
  pros: string;

  @Column({ type: 'text', nullable: true })
  cons: string;

  @Column({ type: 'boolean', default: true, name: 'is_verified_purchase' })
  isVerifiedPurchase: boolean;

  @Column({ type: 'int', default: 0, name: 'helpful_count' })
  helpfulCount: number;

  @Column({ type: 'int', default: 0, name: 'unhelpful_count' })
  unhelpfulCount: number;

  @Column({ type: 'text', nullable: true, name: 'developer_reply' })
  developerReply: string;

  @Column({ type: 'datetime', nullable: true, name: 'developer_reply_at' })
  developerReplyAt: Date;

  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // Relations
  @ManyToOne(() => VirtualCharacter, character => character.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}