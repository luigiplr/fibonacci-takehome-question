import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
