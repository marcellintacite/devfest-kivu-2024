import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import DpGenerator from "./pages/dp-generator.jsx";
import NavbarWithSimpleLinks from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full min-h-screen">
        <NavbarWithSimpleLinks />
        <Home />
      </div>
    ),
  },
  {
    path: "/dp-generator",
    element: (
      <div className="w-full min-h-screen">
        <NavbarWithSimpleLinks />
        <DpGenerator />,
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
