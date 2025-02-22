import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,gs}"],
    extends: [pluginJs.configs.recommended, tseslint.configs.recommended],
  },
  { languageOptions: { globals: globals.browser } }
);
