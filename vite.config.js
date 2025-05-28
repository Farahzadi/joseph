import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import soldJsPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [soldJsPlugin(), tailwindcss()],
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        panel: "src/panel.html",
      },
    },
  },
});
