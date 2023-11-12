import React from "react";
import { Outlet } from "react-router-dom";

import "./styles.scss";

const NavbarLayout = (): JSX.Element => {
  return (
    <div className="container">
      Navbar
      <Outlet />
    </div>
  );
};

export { NavbarLayout };
