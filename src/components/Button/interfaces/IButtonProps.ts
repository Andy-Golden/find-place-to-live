import type React from "react";

export interface IButtonProps {
  type: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  background?: string;
  textColor?: string;
  onClick?: () => void;
}
