import React from "react";

import type { IToastProps } from "./interfaces";

import "./styles.scss";

const Toast = ({ type, message, onHideToast }: IToastProps): JSX.Element => {
  return (
    <div className={`toast toast--show progress-${type}`}>
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
