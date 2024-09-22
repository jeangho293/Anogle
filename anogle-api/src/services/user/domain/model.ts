import { Column, Entity } from 'typeorm';
import { Aggregate } from '../../../libs/ddd/aggregate';

@Entity()
export class User extends Aggregate {
  @Column()
  username!: string;

  @Column()
  password!: string;
}
