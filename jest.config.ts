import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  resetMocks: true,
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^test-utils/(.*)$': '<rootDir>/src/test-utils/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    // SVGR mock
    '^.+\\.(svg)$': '<rootDir>/src/test-utils/mocks/svg.ts',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
