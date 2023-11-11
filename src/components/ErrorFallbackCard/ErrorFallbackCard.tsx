import React from "react";

import "./styles.scss";

const ErrorFallbackCard = (): JSX.Element => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Something went wrong</h1>;
    </div>
  );
};

export default ErrorFallbackCard;
