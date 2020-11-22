import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/"
});

instance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("scrapper-pro-token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
