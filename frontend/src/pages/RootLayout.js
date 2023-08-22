import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// import HomePage from "../pages/HomePage";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
