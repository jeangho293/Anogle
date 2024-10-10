import axios from "axios";

const httpClient = (() => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  instance.interceptors.response.use(
    (res) => {
      // NOTE: api에서는 { data: xxxx } 형식으로 데이터를 주기로 약속한다.
      return res.data.data;
    },
    (err) => {
      // TODO: 에러가 발생할 경우 핸들링 좀 더 해야함. 서버에서 보내주는 에러를 사용해야하는 경우가 있음.
      return err;
    }
  );
  return {
    async get<T>(url: string): Promise<T> {
      return instance.get(url);
    },

    async post<T>(url: string, data: Record<string, any>): Promise<T> {
      return instance.post(url, data);
    },
  };
})();

export { httpClient };
