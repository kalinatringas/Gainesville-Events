import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Gainesville-Events/',

  plugins: [react()],
  root: './',  // Ensure the root is correctly set to your project root
  build: {
    outDir: 'build',  // Output directory for the build
    rollupOptions: {
      input: './index.html', // specify the entry file
      external: ['react-router-dom']
    }
  }
})


// vite.config.js
