import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class Aggregate<T> {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ select: false })
  createdAt!: Date;

  @Column({ select: false })
  createdBy!: string;

  @UpdateDateColumn({ select: false })
  updatedAt!: Date;

  @Column({ select: false })
  updatedBy!: string;

  @DeleteDateColumn({ nullable: true, select: false })
  deletedAt!: Date;

  @Column({ nullable: true, select: false })
  deletedBy!: string;

  setTxId(txId: string) {
    if (!this.createdBy) {
      this.createdBy = txId;
    }
    this.updatedBy = txId;
  }
}
