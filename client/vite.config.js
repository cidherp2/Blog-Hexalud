import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  server:{
    proxy:{
      "/blog/": "http://localhost:3001/"
    },
  },
  plugins: [react()],
})
