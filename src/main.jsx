import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./components/layout/Home.jsx";
import AboutLayout from "./components/layout/AboutLayout.jsx";
import CapabilitiesLayout from "./components/layout/CapabilitiesLayout.jsx";
import CareerLayout from "./components/layout/CareerLayout.jsx";
import SustainabilityLayout from "./components/layout/SustainabilityLayout.jsx";
import OurPeople from "./components/pages/OurPeoplePage/OurPeople.jsx";
import Showroom from "./components/pages/showroom/Showroom.jsx";
import BrandValue from "./components/pages/brandValue/BrandValue.jsx";

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
      {
        path: "/sustainability",
        element: <SustainabilityLayout/>,
      },
      {
        path: "/our-careers",
        element: <CareerLayout/>,
      },
      {
        path: "/our-people",
        element: <OurPeople/>,
      },
      {
        path: "/showroom",
        element: <Showroom/>,
      },
      {
        path: "/epic-brand-values",
        element: <BrandValue/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
