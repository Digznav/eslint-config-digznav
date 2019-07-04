'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',

    './rules/prettier'
  ].map(require.resolve),
  rules: {
    // In must cases use named functions.
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ],

    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },

    // https://eslint.org/docs/rules/strict
    strict: 'error'
  }
};
