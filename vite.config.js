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
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@videos': path.resolve(__dirname, 'src/assets/videos'),
      '@cgi': path.resolve(__dirname, 'src/assets/cgi'),
      '@videoThumbnails': path.resolve(__dirname, 'src/assets/videos/videoThumbnails'),
      '@cgiThumbnails': path.resolve(__dirname, 'src/assets/cgi/cgiThumbnails'),
      '@devwebThumbnails': path.resolve(__dirname, 'src/assets/devweb/devwebThumbnails'),
      '@videoSources': path.resolve(__dirname, 'src/assets/videos/videoSources'),
      '@cgiSources': path.resolve(__dirname, 'src/assets/cgi/cgiSources'),
    },
  },
})
