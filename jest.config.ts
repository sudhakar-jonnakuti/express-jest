import path from "node:path";
const rootDirectory = __dirname;

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  detectOpenHandles: true,
  rootDir: rootDirectory,
  roots: [rootDirectory],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "js", "json"],
  moduleNameMapper: {
    "@common(.*)$": `${rootDirectory}/src/common$1`,
    "@exception(.*)$": `${rootDirectory}/src/exception$1`,
    "@module(.*)$": `${rootDirectory}/src/module$1`,
    "@route(.*)$": `${rootDirectory}/src/route$1`,
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    },
  },
  setupFilesAfterEnv: [`${rootDirectory}/tests/setup.ts`],
  testPathIgnorePatterns: [
    `${rootDirectory}/tests/setup.ts`,
    `${rootDirectory}/tests/jest-globals-teardown.ts`,
  ],
  transform: {
    "^.+\\.{ts}?$": [
      "ts-jest",
      {
        babel: true,
        tsConfig: path.resolve(rootDirectory, "tsconfig.json"),
      },
    ],
  },
  testRegex: ["((/tests/.*)|(\\.|/)(test|spec))\\.ts?$"],
  forceExit: true,
};

export default config;
