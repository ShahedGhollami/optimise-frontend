import clientApi from '../api/apiClient';
import type { Product, SearchParams } from '../types/product';

export type getAllProductsPayload = Partial<SearchParams>;

export interface ResponseGetAllProducts {
  success: boolean;
  message: string;
  data?: Product[];
}

export class ProductService {
  private static cleanParams(payload?: getAllProductsPayload) {
    if (!payload) return undefined;

    return Object.fromEntries(
      Object.entries(payload).filter(([, value]) => {
        if (value === undefined || value === null) return false;
        if (typeof value === 'string' && value.trim() === '') return false;
        return true;
      })
    );
  }

  static getAllProducts(
    payload?: getAllProductsPayload,
    signal?: AbortSignal
  ): Promise<ResponseGetAllProducts> {
    const params = ProductService.cleanParams(payload);

    return clientApi
      .get<ResponseGetAllProducts>(`/Products`, {
        params,
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