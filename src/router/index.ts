import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// 白名单包含的基本静态路由
// const WHITE_NAME_LIST: string[] = []

// 获取各个模块的路由名称
// const getRoutesNames = (array: any[]) => {
//   array.forEach((item: any) => {
//     WHITE_NAME_LIST.push(item.name)
//     getRoutesNames(item.children || [])
//   })
// }
// getRoutesNames(basicRoutes)

const basicRoutes: Record<string, any> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/Goods/index.vue'),
        children: [
          {
            path: 'list',
            name: 'list',
            component: () => import('@/views/Goods/GoodsList.vue'),
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Goods/Category.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
]

// app router
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 *reset router
 */
// export function resetRouter() {
//   router.getRoutes().forEach((route) => {
//     const { name } = route
//   })
// }

/**
 * @param app
 * @description config router
 */
export function setupRouter(app: App<Element>) {
  app.use(router)
}
