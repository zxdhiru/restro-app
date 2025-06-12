import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    allowedHosts: [
      "b9b74caf-f663-4645-8028-fe8cc7284499-00-2cm9nfrj1ugix.pike.replit.dev",
    ],
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
