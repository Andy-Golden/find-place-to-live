module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/*",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^.+\\.(css|less|scss)$": "babel-jest",
    "@pages": "<rootDir>/src/pages",
    "@common": "<rootDir>/src/common",
    "@components": "<rootDir>/src/components",
    "@enums": "<rootDir>/src/enums",
    "@interfaces": "<rootDir>/src/interfaces",
    "@server": "<rootDir>/src/server",
    "@store": "<rootDir>/src/store",
    "@providers": "<rootDir>/src/providers",
    "@constants": "<rootDir>/src/constants",
    "@assets": "<rootDir>/src/assets",
    "@apis": "<rootDir>/src/apis",
    "@layouts": "<rootDir>/src/layouts",
  },
  modulePaths: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
