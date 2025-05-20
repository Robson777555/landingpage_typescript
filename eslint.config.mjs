import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";
import parserTypeScript from "@typescript-eslint/parser";

// Nova forma de importar para ESLint v9.26+
export default [
  // Config base JavaScript
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    },
  },

  // Config TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": pluginTypeScript,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: true,
      },
    },
    rules: {
      ...pluginTypeScript.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/prop-types": "error",
      "react/require-default-props": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "prop-types",
              message: "Use TypeScript type annotations instead of PropTypes.",
            },
          ],
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "MemberExpression[object.name='PropTypes']",
          message: "Use TypeScript type annotations instead of PropTypes.",
        },
      ],
    },
  },

  // Ignorar pastas
  {
    ignores: [".next", "node_modules", "dist", "coverage", "storybook-static"],
  },
];