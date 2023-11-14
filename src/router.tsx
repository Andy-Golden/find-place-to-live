import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { NavbarLayout } from "@layouts";
import { HomePage, SignInPage, SignUpPage } from "@pages";

const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
]);

export default router;
