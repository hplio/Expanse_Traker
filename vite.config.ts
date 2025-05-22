import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import "@tailwindcss/postcss";

// https://vite.dev/config/
export default defineConfig({
  base: "/Expanse_Traker/",
  plugins: [react(), tailwindcss()],
});
