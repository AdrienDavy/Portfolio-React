/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@videos': path.resolve(__dirname, 'src/assets/videos'),
      '@videoThumbnails': path.resolve(__dirname, 'src/assets/videos/videoThumbnails'),
    },
  },
})
