import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          {"Главная"}
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          {"Машины"}
        </Link>
      </div>
      <div className="container mx-auto p-2">
        {/* Вывод компонентов */}
        <Outlet /> 
        </div>
      {/* Панель разработчика */}
      <TanStackRouterDevtools />
    </>
  ),
});
