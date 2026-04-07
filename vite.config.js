import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html',
        game: './game.html',
        qr: './qr.html'
      }
    }
  },
  server: {
    port: 3000,
  }
})
