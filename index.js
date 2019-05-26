module.exports = {
  extends: ['./rules/all'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-var': 'off',
    eqeqeq: 'off',
    'vars-on-top': 'off',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true
      }
    ]
  }
};
