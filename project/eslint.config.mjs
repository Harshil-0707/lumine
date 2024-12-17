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
      // Disable lint rules
      "@typescript-eslint/no-unused-vars": "off", // Disables the unused vars rule
      "@typescript-eslint/no-explicit-any": "off", // Disables the "any" type rule
      "@typescript-eslint/no-empty-object-type": "off", // Disables the empty object type rule
      "@next/next/no-img-element": "off", // Disables the image optimization rule
    }
  }
];

export default eslintConfig;
