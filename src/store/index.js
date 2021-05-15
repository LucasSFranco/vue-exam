import { createStore } from 'vuex'

import { results } from '@/__temp__/db.json'

export default createStore({
  state: {
    news: {
      all: results,
    },
  },
  mutations: {

  },
  actions: {
  },
})
