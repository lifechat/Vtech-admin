import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/style/index.scss'
import { setupLanguage } from './i18n'
/**
 * @description 初始化应用
 */
async function InitApp() {
  // 创建应用实例
  const app = createApp(App)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  // 配置路由
  setupRouter(app)
  setStore(app)
  setupLanguage(app)
  app.mount('#app')
}
InitApp()

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (getToken()) {
//     to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
//     /* has token*/
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       if (store.getters.roles.length === 0) {
//         isRelogin.show = true
//         // 判断当前用户是否已拉取完user_info信息
//         store
//           .dispatch('GetInfo')
//           .then(() => {
//             isRelogin.show = false
//             store.dispatch('GenerateRoutes').then((accessRoutes) => {
//               // 根据roles权限生成可访问的路由表
//               router.addRoutes(accessRoutes) // 动态添加可访问路由表
//               next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
//             })
//           })
//           .catch((err) => {
//             store.dispatch('LogOut').then(() => {
//               Message.error(err)
//               next({ path: '/' })
//             })
//           })
//       } else {
//         next()
//       }
//     }
//   } else {
//     // 没有token
//     if (whiteList.indexOf(to.path) !== -1) {
//       // 在免登录白名单，直接进入
//       next()
//     } else {
//       next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
//       NProgress.done()
//     }
//   }
// })
