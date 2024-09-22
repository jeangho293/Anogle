import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class Aggregate {
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
}
