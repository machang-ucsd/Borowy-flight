// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or the plugin for your framework

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // or your framework's plugin
  base: '/borowy-flight/', // 👈 Add this line
})
