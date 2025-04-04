import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/cruising',
  server: {
    https: {
      key: fs.readFileSync("C:\\Windows\\System32\\localhost+1-key.pem"),
      cert: fs.readFileSync("C:\\Windows\\System32\\localhost+1.pem"),
    },
    host: '0.0.0.0',
  },
});
