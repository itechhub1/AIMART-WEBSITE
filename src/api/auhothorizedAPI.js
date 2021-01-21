import axios from "axios";

const url = "https://aimart-api.herokuapp.com";

//creating instance

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await window.localStorage.getItem("token");
    console.log("token",window.localStorage.getItem("token"));
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default instance;
