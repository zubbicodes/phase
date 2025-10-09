import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'react-icons'],
          particles: ['@tsparticles/react', '@tsparticles/slim'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Enhanced image optimization for WebP
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  // Add preload hints for critical images
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      // Add WebP support headers
      'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    },
  },
  // Optimize image processing
  esbuild: {
    target: 'es2020',
  },
});
