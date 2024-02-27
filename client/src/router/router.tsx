import React from "react";
import { Route as RouterRoute, Routes } from "react-router-dom";
import LoadingRoute from "./loading.route";

export type Route = {
  path: string;
  loader: () => Promise<{
    default: React.ComponentType<unknown>;
  }>;
  children?: Route[];
};

type Props = {
  routes: Route[];
};

export default function Router(props: Props) {
  const routes = normalizeRoutes(props.routes);

  return (
    <Routes>
      <RouterRoute path="*" element={<>404</>} />
      {routes.map((route) => {
        const RouteComponent = React.lazy(route.loader);

        return (
          <RouterRoute
            path={route.path}
            element={
              <LoadingRoute>
                <RouteComponent />
              </LoadingRoute>
            }
            key={route.path}
          />
        );
      })}
    </Routes>
  );
}

const normalizeRoutes = (routes: Route[], basePath = "") => {
  const plainRoutes: Route[] = [];

  for (const route of routes) {
    plainRoutes.push({
      ...route,
      path: basePath + route.path,
    });

    if (!route.children) continue;
    const children = route.children.map((child) => ({
      ...child,
    }));

    const childRoutes = normalizeRoutes(children, basePath + route.path);
    for (const r of childRoutes) plainRoutes.push(r);
  }

  return plainRoutes;
};
