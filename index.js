module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/es6',
    './rules/imports',
    './rules/prettier'
  ].map(require.resolve)
};
