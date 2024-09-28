import { UserRepository } from '../../infrastructure/repository';
import { User } from '../model';
import { UserSpec } from './user-spec';

export class FilteredUserSpec implements UserSpec {
  private id?: number;

  private username?: string;

  private email?: string;

  constructor({ id, username, email }: { id?: number; username?: string; email?: string }) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  async satisfyingElementFrom(userRepository: UserRepository): Promise<User[]> {
    return userRepository.find({
      id: this.id,
      username: this.username,
      email: this.email,
    });
  }

  async satisfyingCountFrom(userRepository: UserRepository): Promise<number> {
    return userRepository.count({
      id: this.id,
      username: this.username,
      email: this.email,
    });
  }
}
