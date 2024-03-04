import { FC } from "react";
import { Typography } from "../../../shared/ui/Typography";
import { products } from "./model/Product";
import { Link } from "@tanstack/react-router";
import { Button } from "../../../shared/ui/Button";

export const Products: FC = function Products() {
  const list = products.map((item) => (
    <li key={item.id.toString()}>
      <Typography size={20} align={"center"}>
        {item.name}
      </Typography>
      <Link
        to="/products/$productID"
        params={{ productID: item.id.toString() }}
      >
        <Button className="w-40" mode={"dark"}>
          {"Перейти"}
        </Button>
      </Link>
    </li>
  ));
  return <ul>{list}</ul>;
};
