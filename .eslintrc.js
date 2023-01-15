/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  plugins: ["prettier"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "no-console": "warn",
    "@next/next/no-document-import-in-page": "off",
    "@next/next/no-img-element": "off",
  },
};
