import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The base path MUST match your repository name
  base: "/e-plantShopping/", 
  plugins: [react()],
})
