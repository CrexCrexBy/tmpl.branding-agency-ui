import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

// https://vite.dev/config/
export default defineConfig({
  base: "/tmpl.branding-agency-ui",
  plugins: [react()],
  resolve: {
    alias: {
        "@": resolve(projectRootDir, "src"),
    },
  },
})
