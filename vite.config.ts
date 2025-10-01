import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cspHeaders } from './src/utils/csp-headers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': cspHeaders,
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/colors.scss"; @import "@/styles/spacing-mixins.scss";`,
      },
    },
  },
});
