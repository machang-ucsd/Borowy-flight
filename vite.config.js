import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The name inside the quotes must match your GitHub Repo name EXACTLY.
  // Your repo is "Borowy-flight", so the base must be "/Borowy-flight/"
  base: "/Borowy-flight/", 
})