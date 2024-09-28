import axios from "axios";

export const httpClient = (() => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
  });

  return {
    async get<T>(url: string): Promise<T> {
      const res = await axiosInstance.get<T>(url);
      // @ts-expect-error data를 리턴해주는걸로 서버에서 정해줌.
      return res.data?.data;
    },

    async post<T>(url: string, data: Record<string, any>): Promise<T> {
      const res = await axiosInstance.post<T>(url, data);
      // @ts-expect-error data를 리턴해주는걸로 서버에서 정해줌.
      return res.data?.data;
    },
  };
})();
