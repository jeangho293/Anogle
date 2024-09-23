import { Inject, Service } from 'typedi';
import { DddService, Transaction } from '../../../libs/ddd';
import { UserRepository } from '../../user/infrastructure/repository';
import { FilteredUserSpec } from '../../user/domain/specs';
import { Activity } from '../domain/domain';
import { ActivityRepository } from '../infrastructure/repository';

@Service()
export class ActivityService extends DddService {
  constructor(
    @Inject() private userRepository: UserRepository,
    @Inject() private activityRepository: ActivityRepository
  ) {
    super();
  }

  // TODO: 하루마다 주기적으로 돌아가야하는 것.
  @Transaction()
  async run() {
    const users = await this.userRepository.findSatisfyingSpec(new FilteredUserSpec({}));

    const activities = users.map((user) => {
      return new Activity({ userId: user.id });
    });

    await this.activityRepository.save(activities);
  }
}
