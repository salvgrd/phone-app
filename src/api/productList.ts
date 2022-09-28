import { apiRequest, memoRequest } from '.';
import { Product } from './types';

export const getProductList = async (): Promise<Product[]> => {
  const data = await apiRequest<Product[]>({ path: 'product', method: 'GET' });
  return data;
};

export const cachedProductList = memoRequest<Product[]>(getProductList);
