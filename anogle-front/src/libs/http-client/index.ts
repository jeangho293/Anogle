import axios from "axios";

const httpClient = (() => {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });

  return {
    async get<T>(url: string) {
      return instance.get<T>(url);
    },

    async post<T>(url: string, data: Record<string, any>) {
      return instance.post<T>(url, data);
    },
  };
})();

export { httpClient };
