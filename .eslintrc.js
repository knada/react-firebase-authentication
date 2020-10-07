module.exports = {
    env: {
      es6: true,
      node: true,
      jest: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": { "typescript": {} }
    },
    extends:  [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint", 
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // Disable prop-types as we use TypeScript for type checking
      "react/prop-types": "off",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "off",
        {
          "allowExpressions": true,
          "allowTypedFunctionExpressions": true,
        }
      ], // Consider using explicit annotations for object literals and function return types even when they can be inferred.
      "no-empty": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
}
