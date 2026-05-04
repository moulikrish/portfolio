import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  // 🔥 IMPORTANT FIX
  base: "/",   // ensures correct asset paths in production

  build: {
    outDir: "dist", // default for Vite, but explicitly safer
  },
});