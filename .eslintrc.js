module.exports = {
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": ["eslint:recommended", "airbnb-base", "plugin:react/recommended", "prettier", "prettier/react"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  "globals": {
    'chrome': true
  },
  rules: {
    'no-console': 'off',
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "class-methods-use-this": 'off',
    "no-param-reassign": 'off',
    "max-len": ["error", 120, 2],
    "no-underscore-dangle": 'off',
  },
  "overrides": [ // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }],
};
