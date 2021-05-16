import { createStore } from 'vuex'

import Articles from '@/services/Articles'

export default createStore({
  state: {
    articles: {},
  },

  mutations: {
    CHANGE_ARTICLES: (state, payload) => {
      state.articles = { ...state.articles, ...payload }
    },
  },

  actions: {
    async getAllArticles({ commit }) {
      const articles = await Articles.getAll()

      commit('CHANGE_ARTICLES', articles)
    },
  },
})
