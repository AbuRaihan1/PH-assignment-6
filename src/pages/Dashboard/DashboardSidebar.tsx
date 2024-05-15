"use client";

import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import {
  HiChartPie,
  HiHome,
  HiLogout,
  HiPlus,
  HiChartBar,
} from "react-icons/hi";

import { Link } from "react-router-dom";

function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div className="min-h-[50vh]">
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 ml-2 fixed z-40"
        >
          <FaBars className="h-10 w-10 bg-gray-100 p-3 rounded-full  border" />
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="z-50">
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Link to="/dashboard">
                      <Sidebar.Item icon={HiChartPie}> Dashboard </Sidebar.Item>
                    </Link>

                    <Link to="/dashboard/supplies">
                      <Sidebar.Item icon={HiChartBar} labelColor="dark">
                        All Supplies
                      </Sidebar.Item>
                    </Link>

                    <Link to="/dashboard/create-post">
                      <Sidebar.Item icon={HiPlus} labelColor="dark">
                        create post
                      </Sidebar.Item>
                    </Link>

                    <Link to="/">
                      <Sidebar.Item href="#" icon={HiHome}>
                        Back to Home
                      </Sidebar.Item>
                    </Link>

                    <Link to="#">
                      <Sidebar.Item href="#" icon={HiLogout}>
                        Logout
                      </Sidebar.Item>
                    </Link>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default DashboardSidebar;
