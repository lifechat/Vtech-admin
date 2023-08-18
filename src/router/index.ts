import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { getToken } from '@/utils/common/auth'

const WHITE_NAME_LIST: string[] = ['/login']

const basicRoutes: Record<string, any> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView/index.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/GoodsView/index.vue'),
        children: [
          {
            path: 'list',
            name: 'list',
            component: () => import('@/views/GoodsView/GoodsList.vue'),
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/GoodsView/Category.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginView/index.vue'),
  },
  {
    path: '/:path(.*)',
    component: () => import('@/views/ErrorView/index.vue'),
  },
]

// app router
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

NProgress.configure({ showSpinner: false })
// 路由加载前
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = getToken()
  if (token) {
    if (to.path === '/login' && !logOutState) {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (WHITE_NAME_LIST.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})
// 路由加载后
router.afterEach(() => {
  NProgress.done()
})
/**
 * @param app
 * @description config router
 */
export function setupRouter(app: App<Element>) {
  app.use(router)
}
