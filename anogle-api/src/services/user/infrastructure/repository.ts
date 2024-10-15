import { Service } from 'typedi';
import { DddRepository } from '../../../libs/ddd/repository';
import { type LoginType, User } from '../domain/model';
import type { UserSpec } from '../domain/specs/user-spec';

@Service()
export class UserRepository extends DddRepository<User> {
  entityClass = User;

  async findSatisfyingSpec(spec: UserSpec) {
    return spec.satisfyingElementFrom(this);
  }

  async countSatisfyingSpec(spec: UserSpec) {
    return spec.satisfyingCountFrom(this);
  }

  async find({
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
    return this.getManager.find(this.entityClass, {
      where: {
        id,
        username,
        email,
        type,
        socialId,
      },
    });
  }

  async count({
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
    return this.getManager.count(this.entityClass, {
      where: {
        id,
        username,
        email,
        type,
        socialId,
      },
    });
  }
}
