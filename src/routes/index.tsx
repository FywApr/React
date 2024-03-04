import { createFileRoute } from "@tanstack/react-router";
import { Init } from "../pages/init/Init.tsx";

export const Route = createFileRoute("/")({
  component: Init,
});
