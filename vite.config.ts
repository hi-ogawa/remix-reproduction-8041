import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    // overwrite remix's default ssr build entry
    {
      name: "overwrite-remix-server-entry",
      config(config, env) {
        if (env.command === "build" && config.build?.ssr) {
          return {
            build: {
              rollupOptions: {
                input: "./app/demo.ts",
              },
            },
          };
        }
      },
    },
  ],
});
