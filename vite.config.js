import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repository is named 'La-Queen-Nails', use '/La-Queen-Nails/'
// If your repository is 'nkizzy.github.io' (main GitHub Pages), use '/'
export default defineConfig({
  plugins: [react()],
  base: '/La-Queen-Nails/',
})

