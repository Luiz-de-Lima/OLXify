import React from "react";
import { Route } from "react-router-dom";
type routeType = {
  children: JSX.Element;
  render: () => void;
  path: string | Element;
  element: JSX.Element;
};
export const RouteHandler = ({ children, ...rest, render }: routeType) => {
  return <Route {...rest} render={() => children} />;
};
