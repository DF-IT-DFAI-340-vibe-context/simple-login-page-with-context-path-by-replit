import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: ['b1d8a809-e6cf-494c-8486-80dde53d039e-00-1kz9iwgd14soa.worf.replit.dev']
    },
    base: env.VITE_CONTEXT_PATH || '/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`
        }
      }
    }
  }
})
