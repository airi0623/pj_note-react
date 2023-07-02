import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/sass/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      'react': 'react',
      "@": "/src",
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
})
