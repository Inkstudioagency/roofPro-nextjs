import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The Webflow markup is ported 1:1 with plain <img> (+ srcset) so the
      // original CSS sizing and IX2 interaction targets are preserved.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored Webflow runtime + jQuery (copied verbatim from the Astro source).
    "public/js/**",
    // Optional Strapi CMS and the CSV -> JSON generator are separate Node projects.
    "strapi/**",
    "scripts/**",
  ]),
]);

export default eslintConfig;
