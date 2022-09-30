import { Detail } from '../../api/types';

export const ProductDescription = ({
  price,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
  brand,
  model,
}: Detail): JSX.Element => {
  return (
    <ul className="rounded border p-2">
      <li>{brand}</li>
      <li>{model}</li>
      <li>{price}</li>
      <li>{cpu}</li>
      <li>{ram}</li>
      <li>{os}</li>
      <li>{displayResolution}</li>
      <li>{battery}</li>
      <li>{primaryCamera}</li>
      <li>{secondaryCmera}</li>
      <li>{dimentions}</li>
      <li>{weight}</li>
    </ul>
  );
};
