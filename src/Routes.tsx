import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteHandler } from "./components/RouteHandler";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AdPage } from "./pages/AdPage";
import { AddAds } from "./pages/AddAds";
import { PageAds } from "./pages/PageAds";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <RouteHandler>
            <About />
          </RouteHandler>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/ads/:id"
        element={
          <RouteHandler>
            <AdPage />
          </RouteHandler>
        }
      />

      <Route
        path="/page-ads"
        element={
          <RouteHandler>
            <PageAds />
          </RouteHandler>
        }
      />
      <Route
        path="/post-an-ad"
        element={
          <RouteHandler>
            <AddAds />
          </RouteHandler>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
