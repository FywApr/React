import { createFileRoute } from "@tanstack/react-router";
import { Products } from "../../pages/init/products/Products";

export type ProductQuerySearch = {
  from?: number;
  to?: number;
};

export const Route = createFileRoute("/products/")({
  component: ProductsRoute,
});

function ProductsRoute() {
    const query = Route.useSearch<ProductQuerySearch>();
    return <Products {... query} ></Products>
}