import type { App } from 'vue'

/**
 * 按钮波浪指令
 *
 * @directive 默认方式：v-waves，如 `<div v-waves></div>`
 * @directive 参数方式：v-waves=" |light|red|orange|purple|green|teal"，如 `<div v-waves="'light'"></div>`
 * @param app
 */
export function wavesDirective(app: App) {
  app.directive('waves', {
    // mounted(el,binding){}
  })
}

/**
 * 自定义拖动指令
 *
 * @param app
 * @description  使用方式：v-drag="[dragDom,dragHeader]"，如 `<div v-drag="['.drag-container .el-dialog', '.drag-container .el-dialog__header']"></div>`
 * @description dragDom 要拖动的元素，dragHeader 要拖动的 Header 位置
 */
export function dragDirective(app: App) {
  app.directive('drag', {})
}
