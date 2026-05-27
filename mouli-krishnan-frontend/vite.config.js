import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],

  // 🔥 IMPORTANT FIX
  base: "/",   // ensures correct asset paths in production

  build: {
    outDir: "dist", // default for Vite, but explicitly safer
  },
});