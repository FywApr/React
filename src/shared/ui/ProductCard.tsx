import { FC, LiHTMLAttributes, useState } from "react";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  price: number;
}

export const ProductCard: FC<Props> = function ProductCard(props) {
  const { name = "Название товара", price = "1", ...rest } = props;
  return (
    <li {...rest} className={"w-56 flex flex-col items-center bg-indigo-200 mr-10 rounded-sm p-4"}>
      <strong>{name}</strong>
      <span>{price}</span>
      <button type="button" className={"hover:text-violet-600 mt-5 font-bold border-2 border-indigo-300 bg-white rounded-sm p-2"}>Купить</button>
    </li>
  );
};
