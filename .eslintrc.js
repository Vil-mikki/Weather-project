module.exports = {
  root: true,
  env: {
    "browser": true,
    "es6": true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    'plugin:jest/recommended',
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended"
  ],
  plugins: [
    "react",
    "react-hooks",
    "promise",
    "import",
    "sonarjs",
    "prettier",
    "jest"
  ],
  parserOptions: {
    "sourceType": "module",
  },
  rules: {
    "sonarjs/cognitive-complexity": [2, 30],
    "linebreak-style": 0,
    "quotes": [2, "single", "avoid-escape"],
    "arrow-parens": [2, "always"],
    "comma-dangle": [2, "never"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "prettier/prettier": [2, { "singleQuote": true }],
    "no-unused-vars": 2
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};