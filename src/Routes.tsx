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

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ads/:id" element={<AdPage />} />
      <Route path="/post-an-ad" element={<AddAds />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
