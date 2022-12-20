import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/Index.vue'
// +--------------------------------------------------
// | DEBUG
// +--------------------------------------------------
const DEBUG: boolean = true
// +--------------------------------------------------
// | routes
// +--------------------------------------------------
const routes:any = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/management',
    component: Layout,
    children: [
      {
        path: 'role',
        component: () => import('@/views/management/role/Index.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/management/user/Index.vue')
      }
    ]
  }
]
// +--------------------------------------------------
// | router
// +--------------------------------------------------
const router = createRouter({
  // vue3.0中，必须手动指定模式
  // createWebHistory === history
  // createWebHashHistory === hash
  // createMemoryHistory
  history: DEBUG ? createWebHashHistory() : createWebHistory(),
  routes // 路由规则
})

export default router
