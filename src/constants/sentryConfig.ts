const sentryConfig = {
  dns: process.env.REACT_APP_SENTRY_DNS,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
};

export default sentryConfig;
