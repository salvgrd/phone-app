import type { RouteObject } from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { Error } from '../pages/Error/Error';
import {
  ProductList,
  loader as productLoader,
} from '../pages/ProductList/ProductList';

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
    ],
  },
];
