import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AdPage } from "./pages/AdPage";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ads/:id" element={<AdPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
