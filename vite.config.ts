import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 4173
  },
  preview: {
    host: true, // Izinkan akses dari luar saat preview
    port: 4173, // Pastikan sesuai dengan port yang digunakan
    allowedHosts: ['vite.adhasangg.my.id'] // Tambahkan domain yang diizinkan
  },
  plugins: [react()],
})
