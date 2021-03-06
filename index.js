module.exports = {
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", "tab", {
      "MemberExpression": 1,
      "outerIIFEBody": "off",
      "SwitchCase": 1
    }],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "no-multi-spaces": "warn",
    "space-infix-ops": "warn",
    "no-console": "warn",
    "no-empty": "warn",
    "no-unused-vars": ["warn", { "args": "none" }],
    "no-restricted-globals": ["error", {
      "name": "isNaN",
      "message": "Use Number.isNaN"
    }, {
      "name": "parent",
      "message": "Use window.parent"
    }]
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended"
};

