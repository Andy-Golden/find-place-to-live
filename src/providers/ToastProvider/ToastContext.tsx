import { createContext } from "react";
import type { ToastStatus } from "@enums";

import type { IToastContextValue } from "./interfaces";

export const ToastContext = createContext<IToastContextValue>({
  open: (message: string, status: ToastStatus) => {},
  close: (id: number) => {},
});
