import { UserRepository } from '../../infrastructure/repository';
import type { LoginType, User } from '../model';
import { UserSpec } from './user-spec';

export class FilteredUserSpec implements UserSpec {
  private id?: number;

  private username?: string;

  private email?: string;

  private type?: LoginType;

  private socialId?: string;

  constructor({
    id,
    username,
    email,
    type,
    socialId,
  }: {
    id?: number;
    username?: string;
    email?: string;
    type?: LoginType;
    socialId?: string;
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.type = type;
    this.socialId = socialId;
  }

  async satisfyingElementFrom(userRepository: UserRepository): Promise<User[]> {
    return userRepository.find({
      id: this.id,
      username: this.username,
      email: this.email,
      type: this.type,
      socialId: this.socialId,
    });
  }

  async satisfyingCountFrom(userRepository: UserRepository): Promise<number> {
    return userRepository.count({
      id: this.id,
      username: this.username,
      email: this.email,
      type: this.type,
      socialId: this.socialId,
    });
  }
}
