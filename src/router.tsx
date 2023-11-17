import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "containers";

import { NavbarLayout } from "@layouts";
import { HomePage, SignInPage, SignUpPage } from "@pages";

const router = createBrowserRouter([
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: <NavbarLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
    ],
  },
]);

export default router;
