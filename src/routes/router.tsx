import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SupplyDetails from "../components/supplies/SupplyDetails";
import DashboardLayout from "../layout/DashboardLayout";
import CreateSupplyPost from "../pages/Dashboard/CreateSupplyPost";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Supplies from "../pages/Supplies";
import AllSupplies from "../pages/Dashboard/AllSupplies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },

      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "supplies/:_id",
        element: <SupplyDetails />,
      },
    ],
  },
  // commmon path
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // extra layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create-post",
        element: <CreateSupplyPost />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
