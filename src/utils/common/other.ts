import { nextTick, defineAsyncComponent } from 'vue'
import type { App } from 'vue'
import * as svg from '@element-plus/icons-vue'
import pinia from '@/store/index'

// 引入组件
const SvgIcon = defineAsyncComponent(() => import('@/components/svgIcon/index.vue'))

// 全局注册 svg组件
/**
 * @param app
 */
export function elSvg(app: App) {
  const icons = svg as any
  for (const i in icons) {
    app.component(`ele-${icons[i].name}`, icons[i])
  }
  app.component('SvgIcon', SvgIcon)
}
