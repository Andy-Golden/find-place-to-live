import React from "react";

import { Toast } from "@components";
import { toastStatus } from "@enums";

import { useToastProvidePrepareHook } from "./helper";
import type { IToastProviderProps } from "./interfaces";
import { ToastContext } from "./toast-context";

import "./styles.scss";

const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => {
  const { toasts, contextValue, onCloseToast } = useToastProvidePrepareHook();
  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}{" "}
        <div className="toasts">
          {toasts.length !== 0 &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  type={toastStatus.ERROR}
                  message={toast.message}
                  onHideToast={() => {
                    onCloseToast(toast.id);
                  }}
                ></Toast>
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
};

export default ToastProvider;
