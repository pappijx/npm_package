import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(new URL("src/index.js", import.meta.url).pathname),
      name: "MyReactPackage",
      fileName: (format) => `my-react-package.${format}.js`,
    },
    rollupOptions: {
      // Other Rollup options as needed
    },
  },
})
