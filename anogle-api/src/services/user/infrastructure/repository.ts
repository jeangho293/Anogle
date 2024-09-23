import { Service } from 'typedi';
import { DddRepository } from '../../../libs/ddd/repository';
import { User } from '../domain/model';
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

  async find({ username }: { username?: string }) {
    return this.getManager.find(this.entityClass, {
      where: {
        username,
      },
    });
  }

  async count({ username }: { username?: string }) {
    return this.getManager.count(this.entityClass, {
      where: {
        username,
      },
    });
  }
}
