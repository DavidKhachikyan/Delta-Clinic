import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <Routes>
          <Route path="/hello" exact element={<div>hello</div>} />
          <Route path="/buy" exact element={<div>buy</div>} />
        </Routes>
        {/* <Navigate to="/create" /> */}
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" exact element={<div>Home</div>} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
      {/* <Navigate to="/home" /> */}
    </>
  );
};
