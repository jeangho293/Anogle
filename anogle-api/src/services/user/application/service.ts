import { Inject, Service } from 'typedi';
import { DddService } from '../../../libs/ddd';
import { UserRepository } from '../infrastructure/repsoitory';

@Service()
export class UserService extends DddService {
  constructor(@Inject() private userRepository: UserRepository) {
    super();
  }

  async signIn({ username, password }: { username: string; password: string }) {
    const user = await this.userRepository.find({ username });
    return 'test';
  }
}
