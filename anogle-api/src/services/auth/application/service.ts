import { Inject, Service } from 'typedi';
import axios from 'axios';
import { DddService } from '../../../libs/ddd';
import { UserRepository } from '../../user/infrastructure/repository';
import { docs } from '../../../configs';
import { KakaoClient } from '../../../libs/kakao';

@Service()
export class AuthService extends DddService {
  constructor(
    @Inject() private userRepository: UserRepository,
    @Inject() private kakaoClient: KakaoClient
  ) {
    super();
  }

  async signInKakao({ code }: { code: string }) {
    const { access_token } = await this.kakaoClient.oauth.token({ code });

    const { id } = await this.kakaoClient.api.tokenInfo({ token: access_token });
    return { token: 'hi' };
  }
}
