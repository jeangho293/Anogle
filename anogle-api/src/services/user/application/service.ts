import { Inject, Service } from 'typedi';
import { badRequest } from '@hapi/boom';
import { DddService } from '../../../libs/ddd';
import { UserRepository } from '../infrastructure/repository';
import { FilteredUserSpec } from '../domain/specs';
import { User } from '../domain/model';

@Service()
export class UserService extends DddService {
  constructor(@Inject() private userRepository: UserRepository) {
    super();
  }

  async signIn({ email, password }: { email: string; password: string }) {
    const [user] = await this.userRepository.findSatisfyingSpec(new FilteredUserSpec({ email }));
    if (!user.validPassword(password)) {
      throw badRequest('no password');
    }
    return { token: user.getToken() };
  }

  async signUp({
    email,
    username,
    password,
    confirmPassword,
  }: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) {
    const [user] = await this.userRepository.findSatisfyingSpec(new FilteredUserSpec({ email }));

    if (user) {
      throw badRequest(`${email} is already existed.`, { message: `${email} is already existed.` });
    }

    const newUser = User.of({ email, username, password, confirmPassword });

    await this.userRepository.save([newUser]);
  }
}
