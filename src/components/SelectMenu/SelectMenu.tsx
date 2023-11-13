import React from "react";

import type { SelectMenuProps } from "./interfaces";
import { MenuItem } from "./MenuItem";
import { Select } from "./Select";

import "./styles.scss";

const SelectMenu = ({
  className,
  textColor,
  defaultValue,
  options,
  background,
  onChange,
}: SelectMenuProps): JSX.Element => {
  return (
    <div
      className={`select-menu ${className}`}
      style={{ background, color: textColor }}
    >
      <Select onChange={onChange} value={defaultValue}>
        {options.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenu;
