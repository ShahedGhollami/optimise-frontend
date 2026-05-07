import { create } from 'zustand';
import type { Product, SearchParams } from '../types/product';
import { ProductService } from '../Service/ProductService';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: (params: SearchParams) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async (params: SearchParams) => {
    set({ loading: true, error: null });
    try {
      const response = await ProductService.getAllProducts(params);
      if (response.success && response.data) {
        set({ products: response.data, loading: false });
      } else {
        set({ error: response.message, loading: false });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An error occurred', loading: false });
    }
  },
}));