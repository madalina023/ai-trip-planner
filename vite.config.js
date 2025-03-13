import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite"; 
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
   base: './',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
