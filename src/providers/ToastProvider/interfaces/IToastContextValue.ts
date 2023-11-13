import type { ToastStatus } from "@enums";

export interface IToastContextValue {
  open: (message: string, status: ToastStatus) => void;
  close: (id: number) => void;
}
