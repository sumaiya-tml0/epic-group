import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./components/layout/Home.jsx";
import AboutLayout from "./components/layout/AboutLayout.jsx";
import CapabilitiesLayout from "./components/layout/CapabilitiesLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutLayout />,
      },
      {
        path: "/our-capabilities",
        element: <CapabilitiesLayout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
