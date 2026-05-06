export interface Product {
  code: string;
  description: string;
  model: string;
  productGroup: string;
  stockLevel: number;
}

export interface SearchParams {
  code: string;
  partOfDescription: string;
}