import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React DOM in their own chunk
          react: ['react', 'react-dom'],
          // React Router in its own chunk
          router: ['react-router-dom'],
          // Bootstrap and React Bootstrap in their own chunk
          bootstrap: ['react-bootstrap', 'bootstrap'],
          // Other vendor libraries
          vendor: ['react-intersection-observer']
        }
      }
    }
  },
  base: './'
})
