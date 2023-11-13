import type { UseFormRegisterReturn } from "react-hook-form";

export interface ITextInputProps {
  type: "password" | "text";
  value?: string;
  background?: string;
  className?: string;
  textColor?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
}
