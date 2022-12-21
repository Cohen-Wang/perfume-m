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
    path: '/home',
    name: 'home',
    component: Layout,
    meta: { title: '首页', icon: '' },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue'),
        meta: { title: '首页', icon: '' },
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    meta: { title: '管理', icon: '' },
    children: [
      {
        path: 'role',
        name: 'role',
        component: () => import(/* webpackChunkName: "role" */ '@/views/management/role/Index.vue'),
        meta: { title: '角色', icon: '' },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/management/user/Index.vue'),
        meta: { title: '用户', icon: '' },
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    meta: { title: '报表', icon: '' },
    children: [
      {
        path: 'user1',
        name: 'user1',
        component: () => import(/* webpackChunkName: "user" */ '@/views/management/user/Index.vue'),
        meta: { title: '用户', icon: '' },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index.vue'),
    meta: { title: '登录', icon: '' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/redirect/404.vue'),
    meta: { title: '404', icon: '' }
  },
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "403" */ '@/views/redirect/403.vue'),
    meta: { title: '403', icon: '' }
  },
  {
    path: '/500',
    name: '500',
    component: () => import(/* webpackChunkName: "404" */ '@/views/redirect/500.vue'),
    meta: { title: '500', icon: '' }
  },
  {
    path: '/:pathMatch(.*)',
    meta: { isShow: false, isRequireLogin: false },
    redirect: '/404'
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
