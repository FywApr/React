import { createFileRoute } from "@tanstack/react-router";
import { Product } from "../../pages/init/products/Product";

export const Route = createFileRoute("/products/$productID")({
    component: Product,
})