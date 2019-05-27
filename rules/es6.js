module.exports = {
  rules: {
    // Always prefer `var` over `let` or `const`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'off',

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
