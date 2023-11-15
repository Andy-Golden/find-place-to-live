/// <reference types="vite/client" />

import { string } from "prop-types";

interface ImportMetaEnv {
  VITE_APP_API_KEY: string;
  VITE_APP_AUTH_DOMAIN: string;
  VITE_APP_PROJECT_ID: string;
  VITE_APP_STORAGE_BUCKET: string;
  VITE_APP_MESSAGE_SENDER_ID: string;
  VITE_APP_APP_ID: string;
  VITE_APP_MEASUREMENT_ID: string;
  VITE_SENTRY_AUTH_TOKEN: string;
}
