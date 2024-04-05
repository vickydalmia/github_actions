module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "off",
    "jsx-a11y/alt-text": "off",
    "react/require-default-props": "off",
  },
};
