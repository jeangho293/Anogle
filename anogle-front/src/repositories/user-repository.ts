import { httpClient } from "../libs";

const userRepository = {
  async signUp({
    email,
    password,
    confirmPassword,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    return httpClient.post("/users/sign-up", {
      email,
      password,
      confirmPassword,
    });
  },
};

export { userRepository };
