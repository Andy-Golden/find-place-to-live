import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "@assets/images/5place2live.png";
import { SelectLanguage } from "@common";
import { Button, ProfileDropdown } from "@components";

import "./styles.scss";

const NavbarLayout = (): JSX.Element => {
  const [user] = useState(true);

  return (
    <div className="container">
      <nav className="navbar-layout">
        <div className="left-side">
          {" "}
          <div className="logo">
            <img src={Logo} alt="5place2live" />
          </div>
          <div className="left-side__menu">
            <ul className="options">
              <li className="option">
                <Link to="/">Home</Link>
              </li>
              <li className="option">
                <Link to="/">Management</Link>
              </li>
              <li className="option">
                <Link to="/">Create post</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side__menu">
            {user && (
              <>
                {" "}
                <Button type="button">
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button className="btn-signup" type="button">
                  <Link to="/sign-up">Sign Up</Link>
                </Button>
              </>
            )}
            {!user && (
              <>
                <div className="btn-notify">
                  <i className="fas fa-bell"></i>
                  <span className="badge">104</span>
                </div>
                <ProfileDropdown username="Profile" />
              </>
            )}
            <SelectLanguage />
          </div>
          <div className="right-side__menu-dropdown">
            <button>
              <img src="" />
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export { NavbarLayout };
