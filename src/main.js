import { createApp } from 'vue'

import App from '@/views/App.vue'

import store from '@/store'

import icons from '@/assets/icons'

import '@/assets/fonts'

createApp(App)
  .component('Icon', icons)
  .use(store)
  .mount('#app')
