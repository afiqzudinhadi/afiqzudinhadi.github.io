import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		remix({
			ssr: false,
		}),
		tsConfigPaths(),
	],
});
