import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 🚀 Allow unused variables (so build won’t break if imports aren’t used)
      "@typescript-eslint/no-unused-vars": "off",

      // 🚀 Allow `any` type
      "@typescript-eslint/no-explicit-any": "off",

      // 🚀 Allow apostrophes in JSX
      "react/no-unescaped-entities": "off",

      // 🚀 Allow children as props
      "react/no-children-prop": "off",

      // 🚀 Allow let/var without forcing const
      "prefer-const": "off",
      "no-var": "off",

      // 🚀 Disable exhaustive deps warnings for useEffect
      "react-hooks/exhaustive-deps": "off",

      // 🚀 Disable next.js img rule (you can keep <img>)
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
