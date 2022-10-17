import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  displayName: "api",
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "../..",
  setupFiles: ["dotenv/config"],
};

export default config;
