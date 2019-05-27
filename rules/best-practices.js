module.exports = {
  rules: {
    // TODO: Explain why.
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'off',

    // This is not an issue if you understand that JS is a two-pass system.
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    // TODO: enable, semver-major
    'no-useless-catch': 'off',

    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off'
  }
};
