import type { RouteObject } from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { Error } from '../pages/Error/Error';
import {
  ProductList,
  loader as productLoader,
} from '../pages/ProductList/ProductList';
import {
  ProductDetail,
  loader as detailLoader,
  action as cartAction,
} from '../pages/ProductDetail/ProductDetail';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: productLoader,
        element: <ProductList />,
      },
      {
        path: 'product/:productId',
        loader: detailLoader,
        action: cartAction,
        element: <ProductDetail />,
      },
    ],
  },
];
