import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base:
    process.env.DEPLOY_GITHUB_PAGE === "GITHUB_PAGE"
      ? "/vue-expenses-project/"
      : "",
  publicRuntimeConfig: {
    gitBranch: process.env.VUE_APP_GIT_BRANCH,
  },
});
