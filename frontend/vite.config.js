import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      minify: 'esbuild',
      target: 'esnext',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          format: 'es',
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'animation': ['framer-motion'],
            'ui': ['lucide-react'],
          },
        },
      },
      // Ensure proper sourcemap handling
      sourcemap: false,
    },
    // Ensure environment variables are properly handled
    envPrefix: 'VITE_',
    // Ensure mode is set correctly
    mode: mode || 'production',
  }
})
