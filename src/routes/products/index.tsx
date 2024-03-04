import { createFileRoute } from "@tanstack/react-router";
import { Products } from "../../pages/init/products/Products";

export const Route = createFileRoute("/products/")({
    component: Products,
})