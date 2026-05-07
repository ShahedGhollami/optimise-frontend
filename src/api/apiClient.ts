// clientApi.ts
import axiosInstance from './axiosInstance';

const clientApi = {
  get: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.get(`/client${url}`, config),
  post: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.post(`/client${url}`, data, config),
  put: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.put(`/client${url}`, data, config),
  patch: <T = any>(url: string, data?: any, config?: any): Promise<{ data: T }> =>
    axiosInstance.patch(`/client${url}`, data, config),
  delete: <T = any>(url: string, config?: any): Promise<{ data: T }> =>
    axiosInstance.delete(`/client${url}`, config),
};

export default clientApi;
