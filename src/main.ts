import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import injectKey from './config/injectKey'
import '@/assets/scss/main.scss'

const app = createApp(App)

app.provide(injectKey.router, router)

app.use(createPinia())
app.use(router)

app.mount('#app')
