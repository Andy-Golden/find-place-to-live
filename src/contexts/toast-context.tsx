import { createContext } from "react";

import type { IToastContextValue } from "./interfaces";

export const ToastContext = createContext<IToastContextValue>({
  open: (message: string) => {},
  close: (id: number) => {},
});
