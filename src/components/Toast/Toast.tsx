import React from "react";

import { useToastPrepareHook } from "./helper";
import type { IToastProps } from "./interfaces";

import "./styles.scss";

const Toast = ({ type, message, visible }: IToastProps): JSX.Element => {
  const { isDisplay, onHideToast } = useToastPrepareHook(visible);

  return (
    <div
      className={`toast ${
        isDisplay ? "toast--show" : "toast--hide"
      } progress-${type}`}
    >
      {type === "success" && (
        <span className="success">
          <i className="fas fa-check-circle"></i>
        </span>
      )}
      {type === "error" && (
        <span className="error">
          <i className="fas fa-times-circle"></i>
        </span>
      )}
      <span className="toast-content">{message}</span>
      <button className="btn-close-toast" onClick={onHideToast}>
        {" "}
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Toast;
