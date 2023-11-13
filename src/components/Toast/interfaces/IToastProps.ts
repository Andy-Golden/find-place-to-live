import type { ToastStatus } from "@enums";

export interface IToastProps {
  type: ToastStatus;
  message: string;
  onHideToast: () => void;
}
