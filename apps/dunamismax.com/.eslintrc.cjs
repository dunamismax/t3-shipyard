/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@t3-shipyard/config-eslint/nextjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};