import { createRouter, createWebHistory } from 'vue-router'

import News from '@/views/News.vue'

const routes = [
  {
    component: News,
    name: 'all-articles',
    path: '/'
  },
  {
    component: News,
    name: 'topic-articles',
    path: '/topic/:topic'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
