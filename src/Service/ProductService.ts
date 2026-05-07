import clientApi from '../api/apiClient';
import type { Product, SearchParams } from '../types/product';

export type getAllProductsPayload = Partial<SearchParams>;

export interface ResponseGetAllProducts {
  success: boolean;
  message: string;
  data?: Product[];
}

export class ProductService {
  static getAllProducts(
    payload?: getAllProductsPayload,
    signal?: AbortSignal
  ): Promise<ResponseGetAllProducts> {
    return clientApi
      .get<ResponseGetAllProducts>(`/product`, {
        params: payload,
        signal,
      })
      .then((res) => res.data)
      .catch((error: any) => {
        const fallback = { success: false, message: 'An unknown error occurred' };
        if (error?.response?.data) return error.response.data;
        return fallback;
      });
  }
}