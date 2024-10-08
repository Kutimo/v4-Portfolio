module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh", "prettier", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/no-unescaped-entities": 0,
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
  },
  "root": true,

}
