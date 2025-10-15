module.exports = {
    extends: [
      "next",
      "turbo",
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
    ignorePatterns: ["**/dist/**", "**/.next/**"],
};