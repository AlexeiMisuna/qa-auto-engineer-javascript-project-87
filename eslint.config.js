import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    ignores: ["node_modules/", "dist/"],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",

      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },

    rules: {
      semi: ["off"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-console": "warn",
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    },
  },
];
