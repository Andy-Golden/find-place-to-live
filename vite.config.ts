import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig(({ mode }) => {
  // depending on your application, base can also be "/"
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "",
    build: {
      sourcemap: true, // Source map generation must be turned on
      vitePlugins: [
        require("@sentry/vite-plugin").sentryVitePlugin({
          /* options */
        }),
      ],
    },

    plugins: [
      react(),
      viteTsconfigPaths(),
      sentryVitePlugin({
        org: "goldenowl-f1",
        project: "javascript-react",
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
      }),
    ],
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      port: 3000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@apis": path.resolve(__dirname, "src/apis"),
        "@components": path.resolve(__dirname, "src/components"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@server": path.resolve(__dirname, "src/server"),
        "@interfaces": path.resolve(__dirname, "src/interfaces"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@enums": path.resolve(__dirname, "src/enums"),
        "@providers": path.resolve(__dirname, "src/providers"),
        "@common": path.resolve(__dirname, "src/common"),
      },
    },
  };
});
