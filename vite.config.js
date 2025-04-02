import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/emotionNote", // 레포지토리명과 일치해야 함
  plugins: [react()],
})
