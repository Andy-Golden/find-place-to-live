import type { ToastStatusType } from "@enums";

export interface IToastProps {
  type: ToastStatusType;
  message: string;
  onHideToast: () => void;
}
