import { Inject, Service } from 'typedi';
import { DddService, Transaction } from '../../../libs/ddd';
import { UserRepository } from '../../user/infrastructure/repository';
import { KakaoClient } from '../../../libs/kakao';
import { FilteredUserSpec } from '../../user/domain/specs';
import { User } from '../../user/domain/model';
import { GoogleClient } from '../../../libs/google';

@Service()
export class AuthService extends DddService {
  constructor(
    @Inject() private userRepository: UserRepository,
    @Inject() private kakaoClient: KakaoClient,
    @Inject() private googleClient: GoogleClient
  ) {
    super();
  }

  @Transaction()
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

  @Transaction()
  async signInGoogle({ code }: { code: string }) {
    const { id, email } = await this.googleClient.signIn({ code });

    const [user] = await this.userRepository.findSatisfyingSpec(
      new FilteredUserSpec({ socialId: id, type: 'google' })
    );

    if (user) {
      const token = user.getToken();
      return { token };
    }
    const newUser = User.of({
      email,
      username: 'theo',
      password: '1',
      confirmPassword: '1',
      type: 'google',
      socialId: id,
    });

    await this.userRepository.save([newUser]);
    return { token: newUser.getToken() };
  }
}
