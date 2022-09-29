import { Form, Link, useLoaderData, useSubmit } from 'react-router-dom';
import { cachedProductList as getProductList } from '../../api/productList';
import { Product } from '../../api/types';
import { ProductCard } from '../../components/ProductCard/ProductCard';

type ProductsData = { products: Product[]; q: string };

export async function loader({
  request,
}: {
  request: { url: string };
}): Promise<ProductsData> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') ?? '';
  const products = await getProductList();
  const filteredProducts = products.filter(
    product => product.model.includes(q) || product.brand.includes(q)
  );
  return { products: filteredProducts, q };
}

export const ProductList = (): JSX.Element => {
  const { products, q } = useLoaderData() as ProductsData;
  const submit = useSubmit();

  return (
    <>
      <Form className="m-2" id="search-form" role="search">
        <input
          className="p-2 w-full rounded border-b"
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Filter by name/model"
          onChange={(e): void => submit(e.currentTarget.form)}
        />
      </Form>
      <div className="m-2 grid md:grid-cols-4 grid-cols-2 gap-4 overflow-scroll">
        {products.map(p => (
          <Link key={p.id} to={`/product/${p.id}`}>
            <ProductCard className="h-42" product={p} />
          </Link>
        ))}
      </div>
    </>
  );
};
