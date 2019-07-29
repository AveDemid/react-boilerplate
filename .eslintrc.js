module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVesion: 2018,
    sourceType: "module"
  },
  rules: {
    // React
    "react/display-name": "off",
    // TypeScript
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "warn",
    // React hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  plugins: ["react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  }
};
