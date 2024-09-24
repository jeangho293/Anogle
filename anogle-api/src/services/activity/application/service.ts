import { Inject, Service } from 'typedi';
import { DddService, Transaction } from '../../../libs/ddd';
import { UserRepository } from '../../user/infrastructure/repository';
import { FilteredUserSpec } from '../../user/domain/specs';
import { Activity } from '../domain/domain';
import { ActivityRepository } from '../infrastructure/repository';
import type { User } from '../../user/domain/model';
import { FilteredActivitySpec } from '../domain/specs';

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

  // TODO: 시작시간 적용헤야함
  @Transaction()
  async activate({ start }: { start: string }, user: User) {
    const [activity] = await this.activityRepository.findSatisfyingSpec(
      new FilteredActivitySpec({ userId: user.id })
    );

    activity.active();

    await this.activityRepository.save([activity]);
  }
}
