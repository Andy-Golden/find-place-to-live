import type { ToastStatus } from "@enums";

export interface IToastProps {
  type: ToastStatus;
  message: string;
  background?: string;
  textColor?: string;
  onHideToast?: () => void;
}
