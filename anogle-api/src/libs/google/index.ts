import { Inject, Service } from 'typedi';
import axios, { AxiosInstance } from 'axios';
import { DddContext } from '../ddd';

@Service()
export class GoogleClient {
  @Inject()
  context!: DddContext;

  private httpClient?: AxiosInstance;

  private get googleClient(): AxiosInstance {
    if (!this.httpClient) {
      this.httpClient = axios.create();

      this.httpClient.interceptors.response.use((config) => {
        return config.data;
      });
    }

    return this.httpClient;
  }

  public async signIn({ accessToken }: { accessToken: string }) {
    const code = await this.googleClient.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(code);
  }
}
