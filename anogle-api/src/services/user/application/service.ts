import { Service } from 'typedi';
import { DddService } from '../../../libs/ddd/service';

@Service()
export class UserService extends DddService {
  async signIn({ username, password }: { username: string; password: string }) {
    return 'test';
  }
}
