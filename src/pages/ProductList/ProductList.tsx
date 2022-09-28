import { useLoaderData } from 'react-router-dom';
import { getProductList } from '../../api/productList';
import { Product } from '../../api/types';

type ProductsData = { products: Product[] };

export async function loader(): Promise<ProductsData> {
  const products = await getProductList();
  return { products };
}

export const ProductList = (): JSX.Element => {
  const { products } = useLoaderData() as ProductsData;
  return (
    <>
      <input
        className="m-2 p-2 rounded border-b"
        type="text"
        name="q"
        placeholder="Filter by name/model"
      />
      <div className="m-2 grid grid-cols-3 gap-4 overflow-scroll">
        {products.map(p => (
          <span key={p.id} className="">
            {p.model}
          </span>
        ))}
      </div>
    </>
  );
};
