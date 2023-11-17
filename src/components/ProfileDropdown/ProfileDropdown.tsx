import React from "react";
import { Link } from "react-router-dom";

import { useProfileDropdownPrepareHook } from "./helper";
import type { IProfileDropdownProps } from "./interfaces";

import "./styles.scss";

const ProfileDropdown = ({
  username,
  onSignOut,
}: IProfileDropdownProps): JSX.Element => {
  const { t, isShow, onShowDropdown } = useProfileDropdownPrepareHook();

  return (
    <div className="btn-profile">
      <i className="fas fa-user"></i>
      <span>{username}</span>
      <button
        type="button"
        className="btn-show-dropdown"
        onClick={onShowDropdown}
      >
        {" "}
        <i className="fas fa-angle-down"></i>
      </button>
      <ul
        className={`dropdown ${isShow ? "dropdown--show" : "dropdown--hide"}`}
      >
        <li className="dropdown-option">
          <i className="fas fa-info"></i>
          <span>
            <Link to="/profile">{t("info")}</Link>
          </span>
        </li>
        <li className="dropdown-option">
          <i className="fas fa-sign-out-alt"></i>
          <span onClick={onSignOut}>{t("signOut")}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
