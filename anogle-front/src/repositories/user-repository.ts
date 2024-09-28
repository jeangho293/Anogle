import { httpClient } from "../libs/axios";

export const userRepository = {
  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post<{ token: string }>("/users/sign-in", {
      email,
      password,
    });
  },
};
