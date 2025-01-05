import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Gainesville-Events/', // Adjust to your repository name for GitHub Pages
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'], // Externalize these modules
    },
  },
});

