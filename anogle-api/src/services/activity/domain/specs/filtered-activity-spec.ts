import { ActivityRepository } from '../../infrastructure/repository';
import { Activity } from '../domain';
import { ActivitySpec } from './activity-spec';

export class FilteredActivitySpec implements ActivitySpec {
  private userId?: number;

  constructor({ userId }: { userId?: number }) {
    this.userId = userId;
  }

  async satisfyingElementFrom(activityRepository: ActivityRepository): Promise<Activity[]> {
    return activityRepository.find({ userId: this.userId });
  }

  async satisfyingCountFrom(activityRepository: ActivityRepository): Promise<number> {
    return activityRepository.count({ userId: this.userId });
  }
}
