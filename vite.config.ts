// 配置
import { defineConfig, loadEnv } from 'vite'
// Vue
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// 插件
import vitePluginEslint from 'vite-plugin-eslint'
// import vitePluginStylelint from 'vite-plugin-stylelint'
// +--------------------------------------------------
// | 实例化
// +--------------------------------------------------
// @ts-ignore
export default defineConfig(({ mode }: any) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 必须依赖 npm install @types/node --save-dev
      }
    },
    // 代理服务
    server: {
      proxy: {
        host: '0.0.0.0',
        port: env.VITE_APP_PORT || 3000,
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      // 压缩相关
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // 打包路径相关
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        }
      }
    },
    plugins: [
      vue(),
      // vitePluginEslint(),
      // vitePluginStylelint({
      //   fix: true
      // })
    ]
  }
})
