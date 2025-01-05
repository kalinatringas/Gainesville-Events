import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Gainesville-Events/', // Ensure your project is pointing to the correct path
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom', // Make sure the alias is correct
    },
  },
  build: {
    rollupOptions: {
      external: [], // Keep this external for bundling
    },
  },
});

