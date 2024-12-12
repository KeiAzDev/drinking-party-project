import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './frontend',
  server: {
    port: 3000, // フロントエンドの開発サーバーのポート
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // バックエンドのURL
        changeOrigin: true,
      },
    },
  },
});

