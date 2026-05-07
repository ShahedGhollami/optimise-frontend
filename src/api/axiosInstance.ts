import axios from 'axios';
import Cookies from 'js-cookie';
import handleAxiosError from './axiosErrorHandler';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY || 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  function (config) {
    let token = Cookies.get('authToken');  

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => handleAxiosError(error)
);

export default axiosInstance;