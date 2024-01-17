import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $pages: path.resolve(__dirname, "./src/pages"),
      $components: path.resolve(__dirname, "./src/components"),
      $layout: path.resolve(__dirname, "./src/components/layout"),
      $homeSections: path.resolve(__dirname, "./src/pages/home/sections"),
      $types: path.resolve(__dirname, "./src/types"),
      $images: path.resolve(__dirname, "./src/assets/images"),
      $svg: path.resolve(__dirname, "./src/assets/svg"),
      $data: path.resolve(__dirname, "./src/data"),
    },
  },
})
