import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountPageM from "./pages/AccountPageM";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import { action as logoutAction } from "./pages/Logout";
import RootLayout from "./pages/RootLayout";
import SponsorsPage from "./pages/SponsorsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "sponsors", element: <SponsorsPage />, action: loginAction },
      { path: "auth", element: <LoginPage />, action: loginAction },
      { path: "account", element: <AccountPageM />, action: loginAction },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
