import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Repo is served at https://manasvoid0.github.io/PORTFOLIO/ (case-sensitive),
  // so assets must be referenced under this base path.
  base: '/PORTFOLIO/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
