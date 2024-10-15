import { Inject, Service } from 'typedi';
import axios, { type AxiosInstance } from 'axios';
import { DddContext } from '../ddd';
import { docs } from '../../configs';

@Service()
export class KakaoClient {
  private httpClient?: AxiosInstance;

  @Inject()
  context!: DddContext;

  public oauth = {
    token: async ({
      code,
    }: {
      code: string;
    }): Promise<{
      access_token: string;
      token_type: string;
      refresh_token: string;
      id_token: string;
      expires_in: number;
      scope: string;
      refresh_token_expires_in: number;
    }> => {
      return this.kakaoClient.post(
        '/oauth/token',
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
    },
  };

  public api = {
    tokenInfo: async ({ token }: { token: string }): Promise<{ id: number }> => {
      const result = await axios.get('https://kapi.kakao.com/v1/user/access_token_info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return result.data;
    },
  };

  private get kakaoClient(): AxiosInstance {
    if (!this.httpClient) {
      this.httpClient = axios.create({
        baseURL: 'https://kauth.kakao.com',
      });

      this.httpClient.interceptors.response.use(
        (config) => {
          return config.data;
        },
        (err) => {
          return err;
        }
      );
    }

    return this.httpClient;
  }
}
