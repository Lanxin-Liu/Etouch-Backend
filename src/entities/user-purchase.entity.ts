import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './user.entity';
import { VirtualCharacter } from './virtual-character.entity';

export enum PurchaseStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

@Entity('user_purchases')
@Index('idx_user_purchases', ['userId'])
@Index('idx_transaction', ['transactionId'])
export class UserPurchase {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'purchase_id', unsigned: true })
  purchaseId: number;

  @Column({ type: 'bigint', name: 'user_id', unsigned: true })
  userId: number;

  @Column({ type: 'bigint', name: 'character_id', unsigned: true })
  characterId: number;

  @Column({ type: 'varchar', length: 100, unique: true, name: 'transaction_id' })
  transactionId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 10, default: 'CNY' })
  currency: string;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'payment_method' })
  paymentMethod: string;

  @Column({
    type: 'enum',
    enum: PurchaseStatus,
    default: PurchaseStatus.PENDING
  })
  status: PurchaseStatus;

  @CreateDateColumn({ name: 'purchase_time' })
  purchaseTime: Date;

  @Column({ type: 'datetime', nullable: true, name: 'refund_time' })
  refundTime: Date;

  @Column({ type: 'text', nullable: true, name: 'refund_reason' })
  refundReason: string;

  // Relations
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => VirtualCharacter, character => character.purchases, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })
  character: VirtualCharacter;
}