import React from "react";

import type { ITextInputProps } from "./interfaces";

import "./styles.scss";

const TextInput = ({
  type,
  value,
  background,
  className,
  textColor,
  placeholder,
  register,
}: ITextInputProps): JSX.Element => {
  return (
    <input
      className={`input ${className}`}
      value={value}
      type={type}
      style={{ background, color: textColor }}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default TextInput;
