import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ important for Vercel to serve assets correctly
  server: {
    proxy: {
      '/api': {
        target: 'https://write-wave-v38z.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
