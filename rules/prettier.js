'use strict';

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2, // Default
        useTabs: false, // Default
        semi: true, // Default
        singleQuote: true,
        quoteProps: 'as-needed', // Default
        jsxSingleQuote: false, // Default (React)
        trailingComma: 'none', // Default
        bracketSpacing: true, // Default
        jsxBracketSameLine: false, // Default (React)
        arrowParens: 'avoid', // Default
        rangeStart: 0, // Default
        rangeEnd: Infinity, // Default
        parser: 'babel',
        filepath: '', // Default
        requirePragma: false, // Default
        insertPragma: false, // Default
        proseWrap: 'preserve', // Default
        htmlWhitespaceSensitivity: 'css', // Default
        endOfLine: 'auto' // Default
      }
    ]
  }
};
