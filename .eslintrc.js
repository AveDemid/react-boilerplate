module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [    
    //  eslint
    "eslint:recommended",
    // typescript
    "plugin:@typescript-eslint/recommended",
    // react
    "plugin:react/recommended",
    // eslint-prettier-plugin
    "plugin:prettier/recommended",
    // eslint-config-prettier
    "prettier",
    "prettier/@typescript-eslint",
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
  plugins: ["react-hooks", "prettier"],
  settings: {
    react: {
      version: "detect"
    }
  }
};
