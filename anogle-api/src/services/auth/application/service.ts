import { Inject, Service } from 'typedi';
import { DddService } from '../../../libs/ddd';
import { UserRepository } from '../../user/infrastructure/repository';
import { KakaoClient } from '../../../libs/kakao';
import { FilteredUserSpec } from '../../user/domain/specs';
import { User } from '../../user/domain/model';

@Service()
export class AuthService extends DddService {
  constructor(
    @Inject() private userRepository: UserRepository,
    @Inject() private kakaoClient: KakaoClient
  ) {
    super();
  }

  async signInKakao({ code }: { code: string }) {
    const id = await this.kakaoClient.signIn(code);

    const [user] = await this.userRepository.findSatisfyingSpec(
      new FilteredUserSpec({ socialId: String(id), type: 'kakao' })
    );

    if (user) {
      const token = user.getToken();
      return { token };
    }
    // TODO: 에고 귀찮
    const newUser = User.of({
      email: 'hi',
      username: 'theo',
      password: '1',
      confirmPassword: '1',
      type: 'kakao',
      socialId: String(id),
    });

    await this.userRepository.save([newUser]);

    return { token: newUser.getToken() };
  }
}
