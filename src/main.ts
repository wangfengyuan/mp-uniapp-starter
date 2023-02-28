import { createSSRApp } from 'vue'
import UniLayouts from 'virtual:uni-layouts'
import uView from 'vk-uview-ui'
import App from './App.vue'
import { setupPinia } from '~/modules/pinia'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  // Configure store
  // https://pinia.vuejs.org/
  setupPinia(app)
  // 使用 uView UI
  app.use(uView)
  app.use(UniLayouts)

  return { app }
}
