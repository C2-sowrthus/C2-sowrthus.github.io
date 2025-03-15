import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Thay thế '<tên-repository-của-bạn>' bằng tên repository thực tế của bạn
  // Ví dụ: nếu URL GitHub Pages của bạn là https://username.github.io/memory-garden-friends/
  // thì base sẽ là '/memory-garden-friends/'
  base: mode === 'production' ? '/memory-garden-friends/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
