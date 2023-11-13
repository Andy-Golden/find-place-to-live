import type { ToastStatus } from "@enums";

export interface IToast {
  id: number;
  status: ToastStatus;
  message: string;
}
