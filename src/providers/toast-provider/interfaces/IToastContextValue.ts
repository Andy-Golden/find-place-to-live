import type { ToastStatusType } from "@enums";

export interface IToastContextValue {
  open: (message: string, status: ToastStatusType) => void;
  close: (id: number) => void;
}
