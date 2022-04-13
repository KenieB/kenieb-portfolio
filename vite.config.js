import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://www.kenie-betts.com/",
  plugins: [react()],
  publicDir: "src/**"
});
