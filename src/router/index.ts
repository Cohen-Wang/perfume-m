import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { getBreadCrumbItems } from '@/utils/routes'
import Layout from '@/components/layout/Index.vue'
// +--------------------------------------------------
// | DEBUG
// +--------------------------------------------------
const DEBUG: boolean = true
// +--------------------------------------------------
// | routes
// +--------------------------------------------------
const routes: any = [
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
        meta: { title: '角色管理', icon: '' },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/management/user/Index.vue'),
        meta: { title: '用户管理', icon: '' },
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
    name: 'not-found',
    component: () => import(/* webpackChunkName: "404" */ '@/views/redirect/404.vue'),
    meta: { isShow: false, isRequireLogin: false }
  },
  {
    path: '/403',
    name: 'forbidden',
    component: () => import(/* webpackChunkName: "403" */ '@/views/redirect/403.vue'),
    meta: { isShow: false, isRequireLogin: false }
  },
  {
    path: '/500',
    name: 'server-error',
    component: () => import(/* webpackChunkName: "404" */ '@/views/redirect/500.vue'),
    meta: { isShow: false, isRequireLogin: false }
  },
  {
    path: '/:pathMatch(.*)',
    meta: { isShow: false, isRequireLogin: false },
    redirect: '/404'
  }
]
// +--------------------------------------------------
// | 实例化
// +--------------------------------------------------
const router = createRouter({
  history: DEBUG ? createWebHashHistory() : createWebHistory(),
  routes // 路由规则
})
// +--------------------------------------------------
// | 拦截器
// +--------------------------------------------------
router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = true
  if (isLogin) {
    next()
  } else {
    if (to.matched.length > 0 && to.matched.every((item: any) => !item.meta.isRequireLogin)) {
      next()
    } else {
      next('/login')
    }
  }
  // 修改浏览器tab名称
  // let breadCrumbItems: any = [{
  //   path: '/',
  //   title: process.env.VUE_APP_TITLE
  // }]
  // breadCrumbItems = getBreadCrumbItems(matched, breadCrumbItems
  document.title = to.matched?.map((e: any) => e.meta?.title).join('/')
})
// +--------------------------------------------------
// | 暴露
// +--------------------------------------------------
export default router
