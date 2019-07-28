import React from "react";
import { GlobalStyles } from "./global-styles";
import { rootRoutes } from "./root-routes";

export const App = () => (
  <>
    <GlobalStyles />
    {rootRoutes()}
  </>
);
