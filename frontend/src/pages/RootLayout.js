import React from "react";
import { Outlet } from "react-router-dom";
import NavLoggedIn from "../components/NavLoggedIn";
// import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <NavLoggedIn />
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
