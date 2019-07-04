module.exports = {
  // extends: ['plugin:node/recommended'],
  // plugins: ['node'],
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off'

    // // STYLE
    // // Always use `module.exports`.
    // // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    // 'node/exports-style': ['error', 'module.exports'],

    // // Do not use extensions, for now.
    // // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    // 'node/file-extension-in-import': ['error', 'never'],

    // // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    // 'node/no-extraneous-import': 'error',

    // 'node/no-missing-import': 'error',

    // 'node/no-unpublished-import': 'off',
    // 'node/no-unsupported-features/es-builtins': 'off',
    // 'node/no-unsupported-features/es-syntax': 'off',
    // 'node/no-unsupported-features/node-builtins': 'off',
    // 'node/prefer-global/buffer': 'off',
    // 'node/prefer-global/console': 'off',
    // 'node/prefer-global/process': 'off',
    // 'node/prefer-global/text-decoder': 'off',
    // 'node/prefer-global/text-encoder': 'off',
    // 'node/prefer-global/url-search-params': 'off',
    // 'node/prefer-global/url': 'off',
    // 'node/prefer-promises/dns': 'off',
    // 'node/prefer-promises/fs': 'off',
    // 'node/process-exit-as-throw': 'off',
    // 'node/shebang': 'off',

    // // COMMON
    // // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    // 'node/no-deprecated-api': 'error',
    // 'node/no-extraneous-require': 'error',
    // 'node/no-missing-require': 'error',
    // 'node/no-unpublished-bin': 'error',
    // 'node/no-unpublished-require': 'error',
    // 'node/no-unsupported-features/es-builtins': 'error',
    // 'node/no-unsupported-features/es-syntax': 'error',
    // 'node/no-unsupported-features/node-builtins': 'error',
    // 'node/process-exit-as-throw': 'error',
    // 'node/shebang': 'error',
  }
};
