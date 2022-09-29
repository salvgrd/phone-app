import { apiRequest, memoRequest } from '.';
import { Detail, CartCount } from './types';

export type AddToCartPayload = {
  id: string;
  colorCode: number;
  storageCode: number;
};

const getProductDetail = async ({
  productId,
}: {
  productId: string;
}): Promise<Detail> => {
  const data = await apiRequest<Detail>({
    path: `product/${productId}`,
    method: 'GET',
  });
  return data;
};

export const cachedProductDetail = memoRequest<Detail, { productId: string }>(
  getProductDetail
);

export const addProductToCart = async (
  body: AddToCartPayload
): Promise<CartCount> => {
  const data = await apiRequest<CartCount, AddToCartPayload>({
    path: 'cart',
    method: 'POST',
    body,
  });
  return data;
};
