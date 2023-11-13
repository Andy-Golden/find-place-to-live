import React from "react";

import { Toast } from "@components";

import { useToastProvidePrepareHook } from "./helper";
import type { IToastProviderProps } from "./interfaces";
import { ToastContext } from "./ToastContext";

import "./styles.scss";

const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => {
  const { toasts, contextValue, onCloseToast } = useToastProvidePrepareHook();
  return (
    <ToastContext.Provider value={contextValue}>
      {children}{" "}
      <div className="toasts">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.status}
            message={toast.message}
            onHideToast={() => {
              onCloseToast(toast.id);
            }}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
