import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Compiled output of `npm test` (the calculator engine suite). It is generated
    // CommonJS, so linting it reports a require()-style-import error against code
    // nobody wrote or ships. Gitignored too.
    ".test-build/**",
  ]),
]);

export default eslintConfig;
