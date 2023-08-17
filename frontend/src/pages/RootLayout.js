import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import HomePage from "../pages/HomePage";
import AuthenticationForm from "../components/AuthenticationForm";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <AuthenticationForm />
      </main>
    </>
  );
};

export default RootLayout;
