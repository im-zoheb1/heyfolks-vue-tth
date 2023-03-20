import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import http from './config/http'
import moment from 'moment'
import injectKey from './config/injectKey'
import '@/assets/scss/main.scss'
import 'vue3-emoji-picker/css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import 'animate.css'
import VueProgressBar from "@aacassandra/vue3-progressbar";

const progressBarOptions = {
  color: "#5372EB",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
}

const app = createApp(App)

app.provide(injectKey.router, router)
app.provide(injectKey.moment, moment)
app.provide(injectKey.$http, http)

app.config.globalProperties.$moment = moment

app.use(createPinia())
app.use(router)
app.use(VueProgressBar, progressBarOptions)

app.mount('#app')
