import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './includes/i18n'
import App from './App.vue'
import router from './router'
import VeeValidatePlugn from './includes/validation'
import { auth } from './includes/firebase'
import { registerSW } from 'virtual:pwa-register'

import Icon from '@/directives/icon'

import './assets/base.css'
import './assets/main.css'

registerSW({ immediate: true })

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugn)
    app.use(i18n)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
