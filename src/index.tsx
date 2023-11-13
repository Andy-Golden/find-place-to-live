import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";

import { ErrorFallbackCard } from "@components";
import { App } from "@pages";
import { ToastProvider } from "@providers";
import { store } from "@store";

import "./sentry";

import reportWebVitals from "./reportWebVitals";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Sentry.ErrorBoundary fallback={<ErrorFallbackCard />}>
    <ToastProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </Sentry.ErrorBoundary>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
