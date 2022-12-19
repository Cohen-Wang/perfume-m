import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const DEBUG: boolean = true

const routes:any = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue'),
    meta: { title: '首页', icon: 'menu' }
  }
]

const router = createRouter({
  // vue3.0中，必须手动指定模式
  // createWebHistory === history
  // createWebHashHistory === hash
  // createMemoryHistory
  history: DEBUG ? createWebHashHistory() : createWebHistory(),
  routes // 路由规则
})

export default router
