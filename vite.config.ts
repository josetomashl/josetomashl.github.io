import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@/", replacement: "/src/" }],
  },
  envPrefix: "VITE_",
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
    minify: true,
    manifest: true,
  },
});
