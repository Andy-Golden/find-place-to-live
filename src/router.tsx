import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { NavbarLayout } from "@layouts";
import { HomePage, SignUpPage } from "@pages";

const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

export default router;
