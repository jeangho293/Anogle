import { Service } from 'typedi';
import { DddRepository } from '../../../libs/ddd';
import { Activity } from '../domain/domain';
import { ActivitySpec } from '../domain/specs';

@Service()
export class ActivityRepository extends DddRepository<Activity> {
  entityClass = Activity;

  async findSatisfyingSpec(spec: ActivitySpec) {
    return spec.satisfyingElementFrom(this);
  }

  async countSatisfyingSpec(spec: ActivitySpec) {
    return spec.satisfyingCountFrom(this);
  }

  async find({ userId }: { userId?: number }) {
    return this.getManager.find(this.entityClass, {
      where: {
        userId,
      },
    });
  }

  async count({ userId }: { userId?: number }) {
    return this.getManager.count(this.entityClass, {
      where: {
        userId,
      },
    });
  }
}
