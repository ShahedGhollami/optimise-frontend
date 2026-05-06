import axios from 'axios';
import type { Product, SearchParams } from '../types/product';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

export const getProducts = async (params: SearchParams): Promise<Product[]> => {
  const response = await apiClient.get<Product[]>('/api/products', { params });
  return response.data;
};
