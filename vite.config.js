import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const repoBase =
  process.env.NODE_ENV === "production"
    ? "/java22-avjs-slutprojekt-jimmy-karlsson/"
    : "/"; // Set the base URL according to the environment

export default defineConfig({
  plugins: [react()],
  base: repoBase,
  build: {
    outDir: "docs",
  },
});
