import React from "react";
import { Outlet } from "react-router-dom";
import NavLoggedIn from "../components/NavLoggedIn";

const RootLayout = () => {
  return (
    <>
      <NavLoggedIn />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
