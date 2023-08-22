import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import { action as logoutAction } from "./pages/Logout";
import EventsPage from "./pages/EventsPage";
import SponsersPage from "./pages/SponsersPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "sponsers", element: <SponsersPage />, action: loginAction },
      { path: "auth", element: <LoginPage />, action: loginAction },
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
