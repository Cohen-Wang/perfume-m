import { createApp } from 'vue'
import { create, NButton } from 'naive-ui' // 必须再App.vue之前
import naive from 'naive-ui'
// 引入【pinia】
import { createPinia } from 'pinia'
import App from './App.vue'
// 引入【路由】
import router from '@/router'
// 引入【样式】
import '@/style/style.css'
import '@/style/tailwind.css'
// +--------------------------------------------------
// | 创建实例
// +--------------------------------------------------
const pinia = createPinia()
// const naive = create({
//   components: [NButton]
// })
// +--------------------------------------------------
// | 注册
// +--------------------------------------------------
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(naive)
app.mount('#app')
