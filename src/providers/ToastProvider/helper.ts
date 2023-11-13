import { useMemo, useState } from "react";
import type { ToastStatus } from "@enums";

import type { IToast, IToastProviderPrepareHook } from "./interfaces";

const useToastProviderPrepareHook = (): IToastProviderPrepareHook => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const openToast = (message: string, status: ToastStatus): void => {
    const newToast = {
      id: Date.now(),
      message,
      status,
    };
    setToasts((prev) => [...prev, newToast]);
  };
  const closeToast = (id: number): void => {
    const newToastList = toasts.filter((toast) => toast.id !== id);
    setToasts(newToastList);
  };

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    [],
  );

  return {
    toasts,
    contextValue,
    onCloseToast: closeToast,
  };
};

export { useToastProviderPrepareHook };
