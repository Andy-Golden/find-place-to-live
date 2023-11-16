import type { ComponentType } from "react";
import type { ErrorBoundaryProps } from "@sentry/react";
import { withErrorBoundary as withSentryErrorBoundary } from "@sentry/react";

import { ErrorFallbackCard } from "@components";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const withErrorBoundary = <P extends Record<string, any>>(
  Component: ComponentType<P>,
  options?: ErrorBoundaryProps,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
  return withSentryErrorBoundary<P>(Component, {
    // eslint-disable-next-line react/react-in-jsx-scope
    fallback: () => <ErrorFallbackCard />,
    ...options,
  });
};

export default withErrorBoundary;
