import { createPinia, Pinia } from 'pinia'
import type { App } from 'vue'

/**
 *
 * @param app
 * @description store config
 */
export function setStore(app: App<Element>) {
  const pinia: Pinia = createPinia()
  app.use(pinia)
}
