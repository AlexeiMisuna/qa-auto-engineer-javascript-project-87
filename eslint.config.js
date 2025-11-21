import js from "@eslint/js"
import stylisticPlugin from "@stylistic/eslint-plugin"

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    ignores: ["node_modules/", "dist/"],
    plugins: {
      "@stylistic": stylisticPlugin,
    },

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
      "@stylistic/quotes": "off",
      "@stylistic/indent": "off",
      "@stylistic/comma-dangle": "off",
      semi: ["off"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-console": "warn",
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    },
  },
]
