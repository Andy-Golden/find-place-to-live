import React from "react";
import { Outlet } from "react-router-dom";

const ErrorBoundary = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ErrorBoundary;
