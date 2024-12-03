import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Set the root directory to `src`
  build: {
    outDir: "../dist", // Output the build to `dist` in the project root
    emptyOutDir: true, // Clear the `dist` folder before building
    rollupOptions: {
      input: "./src/index.html", // Entry point for your app
    },
  },
  publicDir: "src/public", // Define the location of static files
});
