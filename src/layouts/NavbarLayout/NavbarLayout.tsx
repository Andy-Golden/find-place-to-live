import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "@assets/images/5place2live.png";
import { SelectLanguage } from "@common";
import { Button } from "@components";

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
                  <Link to="/signIn">Sign In</Link>
                </Button>
                <Button type="button">
                  <Link to="/signUp">Sign Up</Link>
                </Button>
              </>
            )}
            {!user && (
              <div className="btn-profile">
                <i className="fas fa-user"></i>
                <span>Profile</span>
                <button type="button" className="btn-show-dropdown">
                  {" "}
                  <i className="fas fa-angle-down"></i>
                </button>
                <ul className="dropdown dropdown--hide">
                  <li className="dropdown-option">
                    <i className="fas fa-info"></i>
                    <span>Info</span>
                  </li>
                  <li className="dropdown-option">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Sign out</span>
                  </li>
                </ul>
              </div>
            )}
            <SelectLanguage />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export { NavbarLayout };
