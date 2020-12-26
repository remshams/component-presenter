module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out-tsc/', '<rootDir>/e2e/'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  reporters: [
    'default',
    'jest-html-reporters'
  ]
};
