import axios from "axios";
import { store } from "@/app/store/store";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; 

    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
