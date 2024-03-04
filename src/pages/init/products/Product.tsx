import { FC } from "react";
import { Typography } from "../../../shared/ui/Typography";
import { useParams } from "@tanstack/react-router";
import { products } from "./model/Product";

interface Props {}

export const Product: FC<Props> = function Product() {
  const { productID } = useParams({ from: "/products/$productID" });
  const product = products.find((item) => item.id === Number(productID));
  return <Typography>{product?.name}</Typography>;
};
