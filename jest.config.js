 module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/android/**',
    '!**/ios/**',
    '!**/navigation/**',
    '!**/screens/**',
    '!**/theme/**',
    '!**/features/**',
  ],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
