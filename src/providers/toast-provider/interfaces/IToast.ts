import type { ToastStatusType } from "@enums";

export interface IToast {
  id: number;
  status: ToastStatusType;
  message: string;
}
