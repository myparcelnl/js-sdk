import {InitialOptions} from '@jest/types/build/Config';

const jestConfig: InitialOptions = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Test/(.*)$': '<rootDir>/test/$1',
  },
  setupFiles: ['jest-fetch-mock'],
};

export default jestConfig;
