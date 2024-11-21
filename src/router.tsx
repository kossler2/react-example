import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Designer from "./pages/Designer";
import Viewer from "./pages/Viewer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/designer",
    element: <Designer />
  },
  {
    path: "/viewer",
    element: <Viewer />
  }
]);
