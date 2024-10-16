import { Inject, Service } from 'typedi';
import axios, { AxiosInstance } from 'axios';
import { DddContext } from '../ddd';
import { docs } from '../../configs';

type TokenInfo = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  id_token: string;
};

type UserInfo = {
  // NOTE: 고유 식별자이므로 사용자 레코드의 식별 번호로 사용 가능하다.
  sub: string;
  picture: string;
  email: string;
  email_verified: boolean;
};

@Service()
export class GoogleClient {
  @Inject()
  context!: DddContext;

  private httpClient?: AxiosInstance;

  private get googleClient() {
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

  public async signIn({ code }: { code: string }) {
    const { access_token, token_type }: TokenInfo = await this.googleClient.post(
      'https://oauth2.googleapis.com/token',
      {
        client_id: docs.google.restApiKey,
        redirect_uri: docs.google.redirectURI,
        grant_type: 'authorization_code',
        client_secret: docs.google.secret,
        code,
      }
    );
    const { sub, email }: UserInfo = await this.googleClient.get(
      'https://openidconnect.googleapis.com/v1/userinfo',
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      }
    );
    return { id: sub, email };
  }
}
