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
    component: () => import('@/views/layoutView/index.vue'),
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
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorView/index.vue'),
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
