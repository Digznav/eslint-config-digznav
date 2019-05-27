module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
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
    ]
  }
};
