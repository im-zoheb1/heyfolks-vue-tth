import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import moment from 'moment'
import injectKey from './config/injectKey'
import '@/assets/scss/main.scss'
import 'vue3-emoji-picker/css'
import 'animate.css'

const app = createApp(App)

app.provide(injectKey.router, router)
app.provide(injectKey.moment, moment)

app.config.globalProperties.$moment = moment

app.use(createPinia())
app.use(router)

app.mount('#app')
