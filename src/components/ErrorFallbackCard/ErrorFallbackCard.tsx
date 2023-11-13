import React from "react";

import { useErrorFallbackCardPrepareHook } from "./helper";

import "./styles.scss";

const ErrorFallbackCard = (): JSX.Element => {
  const { onReload } = useErrorFallbackCardPrepareHook();

  return (
    <div className="error-fallback-container">
      <div className="error-card">
        <h1 className="title">Oops!</h1>
        <span className="content">Something went wrong</span>
        <button onClick={onReload}>Reload</button>
      </div>
    </div>
  );
};

export default ErrorFallbackCard;
