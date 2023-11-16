import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  plugins: [react(), viteTsconfigPaths(), EnvironmentPlugin("all")],
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
      "@containers": path.resolve(__dirname, "src/containers"),
    },
  },
});
