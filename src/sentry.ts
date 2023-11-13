import * as Sentry from "@sentry/react";

import { sentryConfig } from "@constants";

Sentry.init({
  dsn: sentryConfig.dns,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: sentryConfig.tracePropagationTargets,
    }),
    new Sentry.Replay(),
  ],

  tracesSampleRate: sentryConfig.tracesSampleRate,
  replaysSessionSampleRate: sentryConfig.replaysSessionSampleRate,
  replaysOnErrorSampleRate: sentryConfig.replaysOnErrorSampleRate,
});
