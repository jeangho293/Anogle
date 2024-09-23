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

  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  createdBy!: string;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  updatedBy!: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt!: Date;

  @Column({ nullable: true })
  deletedBy!: string;

  setTxId(txId: string) {
    if (!this.createdBy) {
      this.createdBy = txId;
    }
    this.updatedBy = txId;
  }
}
