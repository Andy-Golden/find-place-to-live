import React from "react";

import type { IButtonProps } from "./interfaces";

import "./styles.scss";

const Button = ({
  type,
  background,
  className,
  children,
  textColor,
  onClick,
}: IButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      style={{ background, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
