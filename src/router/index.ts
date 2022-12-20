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
    meta: { title: '管理', icon: '' },
    children: [
      {
        path: 'role',
        component: () => import(/* webpackChunkName: "role" */ '@/views/management/role/Index.vue'),
        meta: { title: '角色', icon: '' },
      },
      {
        path: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/management/user/Index.vue'),
        meta: { title: '用户', icon: '' },
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
