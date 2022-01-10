module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks', 'sonarjs'],
    extends: [
      'standard-with-typescript',
      'plugin:jest/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:sonarjs/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  }