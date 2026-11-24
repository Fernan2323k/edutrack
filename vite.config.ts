import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/edutrack/',
  plugins: [react()],
  server: {
    host: true,
  },
})
