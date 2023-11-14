const path = require("path");
module.exports = {
  webpack: {
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
  jest: {
    moduleNameMapper: {
      "@/(.+)": "<rootDir>/src/$1",
      "@assets/(.+)": "<rootDir>/src/assets/$1",
      "@common/(.+)": "<rootDir>/src/common/$1",
      "@components/(.+)": "<rootDir>/src/components/$1",
      "@constants/(.+)": "<rootDir>/src/constants/$1",
      "@layouts/(.+)": "<rootDir>/src/layouts/$1",
      "@store/(.+)": "<rootDir>/src/store/$1",
      "@enums/(.+)": "<rootDir>/src/enums/$1",
      "@pages/(.+)": "<rootDir>/src/pages/$1",
      "@utils/(.+)": "<rootDir>/src/utils/$1",
      "@providers/(.+)": "<rootDir>/src/providers/$1",
      "@interfaces/(.+)": "<rootDir>/src/interfaces/$1",
      "@server/(.+)": "<rootDir>/src/server/$1",
      "@apis/(.+)": "<rootDir>/src/apis/$1",
    },
  },
};
