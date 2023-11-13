import React from "react";

import type { ITextInputProps } from "./interfaces";

const TextInput = ({ type, placeholder }: ITextInputProps): JSX.Element => {
  return <input type={type} placeholder={placeholder} />;
};

export default TextInput;
