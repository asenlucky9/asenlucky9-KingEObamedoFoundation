import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import definesPlugin from './vite-plugin-defines.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Replace all Vite 7 HMR/runtime globals at build time - prevents "is not defined" in production
    define: {
      __DEFINES__: '{}',
      __HMR_CONFIG_NAME__: '""',
      __HMR_PROTOCOL__: '""',
      __HMR_HOST__: '""',
      __HMR_PORT__: '""',
      __HMR_ENABLE_OVERLAY__: 'false',
      __BASE__: '"/"',
      __SERVER_HOST__: '""',
    },
    plugins: [
      react(),
      definesPlugin(), // Fallback for any globals define misses
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
