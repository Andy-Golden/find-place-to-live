import React from "react";

import { useProfileDropdownPrepareHook } from "./helper";
import type { IProfileDropdownProps } from "./interfaces";

const ProfileDropdown = ({ username }: IProfileDropdownProps): JSX.Element => {
  const { t } = useProfileDropdownPrepareHook();
  return (
    <div className="btn-profile">
      <i className="fas fa-user"></i>
      <span>{username}</span>
      <button type="button" className="btn-show-dropdown">
        {" "}
        <i className="fas fa-angle-down"></i>
      </button>
      <ul className="dropdown dropdown--hide">
        <li className="dropdown-option">
          <i className="fas fa-info"></i>
          <span>{t("info")}</span>
        </li>
        <li className="dropdown-option">
          <i className="fas fa-sign-out-alt"></i>
          <span>Sign out</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
