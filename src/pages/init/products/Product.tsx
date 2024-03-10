import { FC } from "react";
import { Typography } from "../../../shared/ui/Typography";
import { useParams } from "@tanstack/react-router";
import { products } from "./model/Product";

interface Props {}

export const Product: FC<Props> = function Product() {
  const { productID } = useParams({ from: "/products/$productID" });
  const product = products.find((item) => item.id === productID);
  return (
    <>
      <Typography>{product?.year}</Typography>
      <Typography>{product?.color}</Typography>
      <Typography>{product?.price}</Typography>
      <Typography>{product?.model}</Typography>
      <Typography>{product?.brand}</Typography>
    </>
  );
};
