import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import vike from 'vike/plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vike(), react(), svgr(), tailwindcss()],
});
