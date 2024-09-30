import { httpClient } from "../libs/axios";
import { queryKeyMap } from "../libs/react-query";

export const userRepository = {
  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post<{ token: string }>("/users/sign-in", {
      email,
      password,
    });
  },
};

queryKeyMap.set(["User"], userRepository.signIn);
