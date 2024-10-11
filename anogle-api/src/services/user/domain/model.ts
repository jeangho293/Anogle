import { Column, Entity } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { badRequest } from '@hapi/boom';
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

  constructor(args: { email: string; username: string; password: string }) {
    super();
    if (args) {
      this.email = args.email;
      this.username = args.username;
      this.password = args.password;
    }
  }

  static of(args: { email: string; username: string; password: string; confirmPassword: string }) {
    if (args.password !== args.confirmPassword) {
      throw badRequest(`${args.password} and ${args.confirmPassword} is different.`);
    }

    return new User({
      email: args.email,
      username: args.username,
      password: args.password,
    });
  }

  validPassword(plainPassword: string) {
    return this.password === plainPassword;
  }

  getToken() {
    return sign({ userId: this.id }, docs.jwt.secret);
  }
}
