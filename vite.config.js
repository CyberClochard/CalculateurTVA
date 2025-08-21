import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
    // Configuration spécifique pour Windows
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  // Configuration pour éviter les erreurs d'URI
  optimizeDeps: {
    exclude: ['@testing-library/jest-dom']
  }
}) 