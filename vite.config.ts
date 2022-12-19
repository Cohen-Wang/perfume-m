import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginEslint from 'vite-plugin-eslint'
// import vitePluginStylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginEslint(),
    // vitePluginStylelint({
    //   fix: true
    // })
  ]
})
