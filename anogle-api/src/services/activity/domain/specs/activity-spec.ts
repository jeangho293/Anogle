import { ActivityRepository } from '../../infrastructure/repository';
import { Activity } from '../domain';

export abstract class ActivitySpec {
  abstract satisfyingElementFrom(activityRepository: ActivityRepository): Promise<Activity[]>;

  abstract satisfyingCountFrom(activityRepository: ActivityRepository): Promise<number>;
}
