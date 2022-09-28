import { Product } from '../../api/types';

type ProductCardProps = {
  product: Product;
  className: string;
};

export const ProductCard = ({
  product,
  className,
}: ProductCardProps): JSX.Element => {
  const { imgUrl, brand, model, price } = product;
  const cssClasses = `grid grid-cols-2 p-4 rounded-lg dark:bg-slate-900 dark:hover:bg-slate-800 bg-orange-300 hover:bg-orange-400 hover:cursor-pointer ${className}`;
  return (
    <div className={cssClasses}>
      <img src={imgUrl} alt={`${brand} ${model}`} />
      <div className="flex flex-col">
        <span>
          {brand} {model}
        </span>
        <span>{price || 100}$</span>
      </div>
    </div>
  );
};
