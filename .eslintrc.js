module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prefer-arrow-callback": 0,
    "func-names": 2,
    "react/jsx-filename-extension": 2,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 1,
    "arrow-body-style": 0,
    "import/extensions": [2, "ignorePackages", { js: "never", jsx: "never" }]
  }
};
