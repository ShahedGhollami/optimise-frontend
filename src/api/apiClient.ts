// clientApi.ts
import axiosInstance from './axiosInstance';

const clientApi = {
  get: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.get(`/api${url}`, config),
  post: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.post(`/api${url}`, data, config),
  put: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.put(`/api${url}`, data, config),
  patch: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.patch(`/api${url}`, data, config),
  delete: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.delete(`/api${url}`, config),
};

export default clientApi;
