import { createApp } from 'vue'

import '@/assets/fonts'
import icons from '@/assets/icons'
import store from '@/store'
import router from '@/views/router'
import App from '@/views/App.vue'

createApp(App)
  .component('Icon', icons)
  .use(store)
  .use(router)
  .mount('#app')
