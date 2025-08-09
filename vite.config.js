import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages when the site is served from a subpath
  // e.g. https://<username>.github.io/portfolio/
  base: '/portfolio/',
})
