import { createApp } from 'vue'

import App from './App.vue'
import 'normalize.css'
import '@/style/reset.less'
import { setupRouter } from '@/router'
import { setStore } from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

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
  app.mount('#app')
}
InitApp()
