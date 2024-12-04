import { Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { customAlphabet } from 'nanoid';
import { Company } from '../../company/domain/model';
import { DddAggregate } from '../../../libs/ddd';

type Creator = {
  branchOffice: string;
  address: string;
  createdOn: string;
};

@Entity()
export class Gym extends DddAggregate<Gym> {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  branchOffice!: string;

  @Column()
  address!: string;

  @Column()
  createdOn!: string;

  @ManyToOne(() => Company, (company) => company.gyms, {
    onDelete: 'CASCADE',
  })
  company!: Company;

  constructor(args: Creator) {
    super();
    if (args) {
      this.branchOffice = args.branchOffice;
      this.address = args.address;
      this.createdOn = args.createdOn;
    }
  }
}