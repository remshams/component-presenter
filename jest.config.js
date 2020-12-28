module.exports = {
  moduleNameMapper: {
    '^@app/common/(.*)$': '<rootDir>/src/app/_common/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out-tsc/', '<rootDir>/e2e/'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  reporters: [
    'default',
    'jest-html-reporters'
  ]
};
