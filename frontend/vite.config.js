import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base for GitHub Pages when served from a subpath
  base: '',
  plugins: [
    tailwindcss(),
    react()],
})
