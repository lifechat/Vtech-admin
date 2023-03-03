import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'

/**
 * @description 初始化应用
 */
async function InitApp() {
  // 创建应用实例
  const app = createApp(App)

  // 配置路由
  setupRouter(app)

  app.mount('#app')
}
InitApp()
