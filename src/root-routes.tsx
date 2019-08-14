import React from "react";
import { Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <h1>Hello from root routes :)</h1>
  },
  {
    component: () => <Redirect to="/" />
  }
];

export const RootRoutes = () => <>{renderRoutes(routes)}</>;
