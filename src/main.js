import { createApp } from 'vue'

import '@/assets/fonts'
import icons from '@/assets/icons'
import router from '@/router'
import store from '@/store'
import App from '@/views/App.vue'

createApp(App)
  .component('Icon', icons)
  .use(store)
  .use(router)
  .mount('#app')
