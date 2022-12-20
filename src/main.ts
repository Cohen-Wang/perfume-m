import { createApp } from 'vue'
import { create, NButton} from 'naive-ui' // 必须再App.vue之前
import naive from 'naive-ui'
import App from './App.vue'
// 引入【路由】
import router from '@/router'
// 引入【样式】
import '@/style/style.css'
import '@/style/tailwind.css'



// const naive = create({
//   components: [NButton]
// })

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')
