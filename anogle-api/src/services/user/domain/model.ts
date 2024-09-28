import { Column, Entity } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { Aggregate } from '../../../libs/ddd';
import { docs } from '../../../configs';

@Entity()
export class User extends Aggregate<User> {
  @Column()
  email!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  validPassword(plainPassword: string) {
    return this.password === plainPassword;
  }

  getToken() {
    return sign({ userId: this.id }, docs.jwt.secret);
  }
}
