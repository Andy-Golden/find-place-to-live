import { lazy } from "react";
import { withErrorBoundary } from "@HOCs";

/* eslint-disable @typescript-eslint/promise-function-async */
const ErrorBoundary = lazy(() => import("./ErrorBoundary"));

export default withErrorBoundary(ErrorBoundary);
