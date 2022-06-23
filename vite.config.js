import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kenieb-portfolio/",
  plugins: [react()],
  build: {
    //minify: false
  }
});
