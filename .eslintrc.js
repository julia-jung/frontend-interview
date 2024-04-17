module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jest'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-bitwise': 'off',
    'no-lonely-if': 'off',
    'class-methods-use-this': 'off',
    'arrow-body-style': 'off',
    'no-loop-func': 'off',
    'no-plusplus': 'off',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
};
