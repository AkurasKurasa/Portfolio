import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH is set by the GitHub Pages workflow (the site lives under /Portfolio/).
// Locally it stays '/' so `npm run dev` works unchanged.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
