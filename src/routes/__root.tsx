import { createRootRoute, Outlet, useMatches } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Fragment } from "react";
import { Header } from "../components/Header";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/ui/colors";
import { NotesProvider } from "../pages/notes/store/NotesProvider";

export const Route = createRootRoute({
  component: () => {
    // разделяет URL на массив
    const matches = useMatches();
    const title = matches[matches.length - 1].staticData.title;
    return (
      <>
        <Fragment>
          {!!title && (
            <Header>
              <Typography
                size={24}
                color={COLORS_TEXT.alternative}
                align={"center"}
              >
                {title ?? ""}
              </Typography>
            </Header>
          )}
        </Fragment>

        {/* Вывод компонентов */}
        <NotesProvider>
          <div className="container mx-auto p-2">
            <Outlet />
          </div>
        </NotesProvider>
        {/* Панель разработчика */}
        <TanStackRouterDevtools />
      </>
    );
  },
});
