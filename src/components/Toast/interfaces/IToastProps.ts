import type { toastStatus } from "@enums";

export interface IToastProps {
  type: toastStatus.ERROR | toastStatus.SUCCESS;
  message: string;
  visible: boolean;
}
