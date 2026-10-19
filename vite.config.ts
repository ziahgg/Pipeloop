import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves a project site from https://<user>.github.io/<repo>/, so the
// production base must match the repository name (case-sensitive). The deploy
// workflow sets BASE_PATH from the actual repository name; locally it defaults to "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
