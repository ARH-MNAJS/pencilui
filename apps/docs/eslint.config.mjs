import config from "@pencilui/eslint-config"

export default [
  ...config,
  {
    rules: {
      "import/order": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]
