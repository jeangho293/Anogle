import { Inject, Service } from 'typedi';
import axios, { type AxiosInstance } from 'axios';
import { DddContext } from '../ddd';
import { docs } from '../../configs';

@Service()
export class KakaoClient {
  @Inject()
  context!: DddContext;

  private httpClient?: AxiosInstance;

  private get kakaoClient(): AxiosInstance {
    if (!this.httpClient) {
      this.httpClient = axios.create();

      this.httpClient.interceptors.response.use(
        (config) => {
          return config.data;
        },
        (err) => Promise.reject(err)
      );
    }
    return this.httpClient;
  }

  public async signIn(code: string) {
    const { access_token }: { access_token: string } = await this.kakaoClient.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: docs.kakao.restApiKey,
        redirect_uri: docs.kakao.redirectURI,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    const { id }: { id: number } = await this.kakaoClient.get(
      'https://kapi.kakao.com/v1/user/access_token_info',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return id;
  }
}
