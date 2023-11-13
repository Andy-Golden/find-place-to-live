import type { IToast } from "./IToast";
import { type IToastContextValue } from "./IToastContextValue";

export interface IToastProviderPrepareHook {
  toasts: IToast[];
  contextValue: IToastContextValue;
  onCloseToast: (id: number) => void;
}
