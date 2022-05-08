import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/home";
import MyPage from "./pages/my-page/myPage";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/my-page" exact element={<MyPage />} />
          <Route path="/about-us" exact element={<About />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />

        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </>
  );
};
