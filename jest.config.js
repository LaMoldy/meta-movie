const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './' // Provides the path to the next app, next.config, and .env files
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig);
