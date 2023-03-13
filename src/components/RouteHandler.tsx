import React from "react";
import { Navigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler";
type RequireProps = {
  children: JSX.Element;
};
export const RouteHandler = ({ children }: RequireProps) => {
  const logged = isLogged();
  const isAuth = true;
  if (isAuth && !logged) {
    return <Navigate to="/signin" />;
  } else return <>{children}</>;
};
