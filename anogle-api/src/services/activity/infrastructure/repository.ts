import { Service } from 'typedi';
import { DddRepository } from '../../../libs/ddd';
import { Activity } from '../domain/domain';

@Service()
export class ActivityRepository extends DddRepository<Activity> {
  entityClass = Activity;
}
