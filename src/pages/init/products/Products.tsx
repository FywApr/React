import { FC } from "react";
import { products } from "./model/Product";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { Link } from "@tanstack/react-router";
import { ProductQuerySearch } from "../../../routes/products";

export const Products: FC<ProductQuerySearch> = function Products(props) {
  const list = products
    .filter(
      (item) =>
        item.price >= (props.from ?? item.price) &&
        item.price <= (props.to ?? item.price)
    )
    .map((item) => (
      <Card>
        <strong className="mb-2">{item.model}</strong>
        <span className="mb-2">{item.price}</span>
        <Link
          to="/products/$productID"
          params={{ productID: item.id.toString() }}
        >
          <Button>{"Перейти"}</Button>
        </Link>
      </Card>
    ));
  return (
    <>
      <ul className="grid grid-rows-3 grid-flow-col gap-4">{list}</ul>
    </>
  );
};
