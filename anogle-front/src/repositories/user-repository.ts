import { httpClient } from "../libs";

const userRepository = {
  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post("/users/sign-in", { email, password });
  },

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
