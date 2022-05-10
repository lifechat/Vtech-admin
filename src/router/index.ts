import type { RouteRecord } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

//app router
export const router = createRouter({
  history: createWebHistory(),
  routes: [],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

//reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
  })
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
