/* eslint-disable */

import React, { useMemo, useState } from "react";
import { ToastContext } from "contexts/toast-context";

import { Toast } from "@components";
import { toastStatus } from "@enums";

interface ToastProviderProps {
  children: React.ReactElement;
}

interface ToastType {
  id: number;
  message: string;
}

const ToastProvider = ({ children }: ToastProviderProps): JSX.Element => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const openToast = (message: string) => {
    const newToast = {
      id: Date.now(),
      message,
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

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}{" "}
        {toasts.length !== 0 &&
          toasts.map((toast) => {
            return (
              <Toast
                key={toast.id}
                type={toastStatus.ERROR}
                message={toast.message}
                onHideToast={() => closeToast(toast.id)}
              ></Toast>
            );
          })}
      </ToastContext.Provider>
    </>
  );
};

export default ToastProvider;
