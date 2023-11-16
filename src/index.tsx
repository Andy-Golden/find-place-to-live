import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "router";

import { ToastProvider } from "@providers";
import { store } from "@store";

import "./sentry";
import "./i18n";

import reportWebVitals from "./reportWebVitals";

import "./index.scss";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ToastProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
