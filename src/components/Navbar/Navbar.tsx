// "use client";

import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export default function Component() {
  const generateClassName = ({ isActive }) =>
    isActive ? "text-cyan-500" : "navbar-link";
  return (
    <Navbar fluid rounded className="shadow-lg bg-white">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Food Distribution
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className={generateClassName} to="/">
          Home{" "}
        </NavLink>
        <NavLink className={generateClassName} to="/about">
          About
        </NavLink>
        <NavLink className={generateClassName} to="/supplies">
          Foods
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
