import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), dts()],
	esbuild: {
		drop: [ "debugger"], // "console",
	},
	build: {
		lib: {
			entry: "./src/index.ts",
			formats: ["es"],
			fileName: (format, entryName) => {
				return `${entryName}.js`;
			},
		},
		rollupOptions: {
			external: ["vue", "naive-ui", "@vicons/ionicons5"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
