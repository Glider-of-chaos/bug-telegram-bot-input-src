import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://glider-of-chaos.github.io/bug-telegram-bot-input-src/',
  build: {
    outDir: './docs',
    emptyOutDir: true,
  }
})
