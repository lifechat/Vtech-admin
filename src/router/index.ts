import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import { basicRoutes } from './demoroute'

// 白名单包含的基本静态路由
const WHITE_NAME_LIST: string[] = []

// 获取各个模块的路由名称
const getRoutesNames = (array: any[]) => {
  array.forEach((item: any) => {
    WHITE_NAME_LIST.push(item.name)
    getRoutesNames(item.children || [])
  })
}
getRoutesNames(basicRoutes)

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
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
  })
}

/**
 * @description config router
 * @param app
 */
export function setupRouter(app: App<Element>) {
  app.use(router)
}
