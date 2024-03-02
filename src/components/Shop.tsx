import { FC } from "react";

interface Props {
  count: number;
}

export const Shop: FC<Props> = function Shop(props) {
  return (
      <header className={"font-bold"}>{`В корзине товаров на сумму: ${props.count}`}</header>
  );
};
