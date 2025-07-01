/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@t3-shipyard/config-eslint/nextjs'],
  parserOptions: {
    project: true,
  },
};
