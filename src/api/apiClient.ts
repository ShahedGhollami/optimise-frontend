// clientApi.ts
import axiosInstance from './axiosInstance';

const clientApi = {
  get: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.get(`${url}`, config),
  post: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.post(`${url}`, data, config),
  put: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.put(`${url}`, data, config),
  patch: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.patch(`${url}`, data, config),
  delete: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.delete(`${url}`, config),
};

export default clientApi;
