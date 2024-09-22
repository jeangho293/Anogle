import { Service } from 'typedi';
import { DddRepository } from '../../../libs/ddd/repository';
import { User } from '../domain/model';

@Service()
export class UserRepository extends DddRepository<User> {
  entityClass = User;

  async find({ username }: { username?: string }) {
    return this.getManager.find(this.entityClass, {
      where: {
        username,
      },
    });
  }
}
