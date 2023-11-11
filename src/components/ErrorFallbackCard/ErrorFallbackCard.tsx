import React from "react";

import "./styles.scss";

const ErrorFallbackCard = (): JSX.Element => {
  return (
    <div className="error-fallback-container">
      <div className="error-card">
        <h1 className="title">Oops!</h1>
        <span className="content">Something went wrong</span>
        <button
          onClick={() => {
            location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default ErrorFallbackCard;
