// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 6
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],

    "import/extensions": [
      "error",
      "never"
    ],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info", "disableYellowBox"],
      },
    ],

    "prefer-arrow-callback": [
      "error"
    ],

    'import/no-extraneous-dependencies': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/imports-first': 'off',
    'react/sort-comp': 'off',
    'react-native/split-platform-components': 'off',
    'react/require-default-props': 'off',
    'import/first': 'off',
    'indent': 'off',
    'react/no-array-index-key': 'off',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from "components/Button"
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
