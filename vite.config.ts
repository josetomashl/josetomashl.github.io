import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@/", replacement: "/src/" }],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router"],
  },
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: true,
    minify: true,
    manifest: true,
  },
});
