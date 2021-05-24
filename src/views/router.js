import { createRouter, createWebHistory } from 'vue-router'

import AppNews from '@/views/AppNews.vue'

const routes = [
  {
    component: AppNews,
    name: 'News',
    path: '/:type(topic)?/:topic?',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
