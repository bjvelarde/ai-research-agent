import js from "@eslint/js";
import next from "eslint-config-next";
import turbo from "eslint-config-turbo";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...next,
  ...turbo,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];