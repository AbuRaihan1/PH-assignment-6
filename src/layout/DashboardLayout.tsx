import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
