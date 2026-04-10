import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vlr-clone/',  // <--- BẠN THÊM ĐÚNG DÒNG NÀY VÀO LÀ ĐƯỢC
})