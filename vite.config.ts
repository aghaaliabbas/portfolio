import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Served from https://aghaaliabbas.github.io/portfolio/ (GitHub Pages project site)
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
    dedupe: ["react", "react-dom"],
  },
});
