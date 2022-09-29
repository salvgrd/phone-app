import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';
import { addProductToCart, getProductDetail } from '../../api/productDetail';
import { CartCount, Detail } from '../../api/types';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';

type DetailData = { product: Detail };

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<DetailData> {
  const { productId } = params;
  const product = await getProductDetail({ productId } as {
    productId: string;
  });
  return { product };
}

export async function action({
  request,
  params,
}: ActionFunctionArgs): Promise<{ cartCount: CartCount }> {
  const formData = await request.formData();
  const { productId } = params;
  const productData = Object.fromEntries(formData) as {
    color: string;
    storage: string;
  };
  const cartCount = await addProductToCart({
    colorCode: Number(productData.color),
    storageCode: Number(productData.storage),
    id: productId as string,
  });
  console.log({ cartCount });
  return { cartCount };
}

export const ProductDetail = (): JSX.Element => {
  const { product } = useLoaderData() as DetailData;
  const { imgUrl, brand, model } = product;
  return (
    <>
      <div className="m-2 shrink grid grid-cols-2 grid-rows-2 gap-4">
        <img
          className="rounded-lg row-span-2 justify-self-center self-center"
          src={imgUrl}
          alt={`${brand} ${model}`}
        />
        <ProductDescription {...product} />
        <Form
          className="rounded border p-2 gap-2 flex flex-col self-start"
          method="post"
          id="buy-form"
        >
          <label htmlFor="color">Color</label>
          <select name="color">
            {product.options.colors.map(c => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
          <label htmlFor="storage">Storage</label>
          <select name="storage">
            {product.options.storages.map(s => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>
          <button
            className="dark:bg-green-600 dark:text-slate-900 bg-blue-600 text-slate-50"
            type="submit"
          >
            Add to cart!
          </button>
        </Form>
      </div>
    </>
  );
};
