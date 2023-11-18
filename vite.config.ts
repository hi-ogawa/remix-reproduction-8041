import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((env) => ({
  plugins: [remix(), tsconfigPaths()],
  build: env.isSsrBuild ? {
    rollupOptions: {
      input: ["./app/other-entry.ts"],
    }
  } : {}
}));
