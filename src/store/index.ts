import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

//config Store
export function setUpStore(app: App<Element>) {
  app.use(store)
}

export { store }
