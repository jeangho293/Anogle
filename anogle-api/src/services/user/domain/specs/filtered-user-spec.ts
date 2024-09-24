import { UserRepository } from '../../infrastructure/repository';
import { User } from '../model';
import { UserSpec } from './user-spec';

export class FilteredUserSpec implements UserSpec {
  private id?: number;

  private username?: string;

  constructor({ id, username }: { id?: number; username?: string }) {
    this.id = id;
    this.username = username;
  }

  async satisfyingElementFrom(userRepository: UserRepository): Promise<User[]> {
    return userRepository.find({
      id: this.id,
      username: this.username,
    });
  }

  async satisfyingCountFrom(userRepository: UserRepository): Promise<number> {
    return userRepository.count({
      id: this.id,
      username: this.username,
    });
  }
}
