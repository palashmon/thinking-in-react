import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up aliases to match the current project structure
      'api': resolve(__dirname, 'src/api.js'),
      'src': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
      'css': resolve(__dirname, 'src/css')
    }
  }
})
