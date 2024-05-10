"use client";

import { Sidebar } from "flowbite-react";
import { HiChartPie, HiHome, HiLogout, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

function DashboardSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example" className="h-screen border">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard">
            <Sidebar.Item icon={HiChartPie}> Dashboard </Sidebar.Item>
          </Link>

          <Link to="/dashboard/create-post">
            <Sidebar.Item icon={HiPlus} labelColor="dark">
              create post
            </Sidebar.Item>
          </Link>
          <Sidebar.Item href="#" icon={HiLogout}>
            Logout
          </Sidebar.Item>

          <Link to="/">
            <Sidebar.Item href="#" icon={HiHome}>
              Back to Home
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashboardSidebar;
