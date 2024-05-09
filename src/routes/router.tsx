import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SupplyDetails from "../components/supplies/SupplyDetails";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Supplies from "../pages/Supplies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
