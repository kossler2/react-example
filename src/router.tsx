import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Designer from "./pages/Designer";
import Respondent from "./pages/Respondent";
import Reports from "./pages/Reports";

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
    path: "/respondent",
    element: <Respondent />
  },
  {
    path: "/reports",
    element: <Reports />
  }
]);
