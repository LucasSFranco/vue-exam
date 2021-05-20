import { createStore } from 'vuex'

import Articles from '@/services/Articles'

export default createStore({
  state: {
    activeTab: null,
    articles: {},
    count: {},
    synching: false,
    tabs: ['all news', ...Articles.topics],
  },

  mutations: {
    'CHANGE_ACTIVE_TAB': (state, payload) => {
      state.activeTab = payload
    },
    'CHANGE_ARTICLES': (state, payload) => {
      state.articles = { ...state.articles, ...payload }
    },
    'CHANGE_COUNT': (state, payload) => {
      state.count = { ...state.count, ...payload }
    },
    'CHANGE_SYNCHING': (state, payload) => {
      state.synching = payload
    },
  },

  actions: {
    changeActiveTab({ commit, dispatch }, tab) {
      commit('CHANGE_ACTIVE_TAB', tab)

      dispatch('loadData')
    },
    loadData({ state, dispatch }) {
      if(!state.synching && state.activeTab && !state.articles[state.activeTab]) {
        if(state.activeTab !== 'all news') {
          dispatch('getTopicArticles', state.activeTab)
          dispatch('getTopicArticlesCount', state.activeTab)
        } else {
          dispatch('getAllArticles')
          dispatch('getAllArticlesCount')
        }
      }
    },
    async getAllArticles({ commit, state }) {
      const { articles } = state

      const allArticles = await Articles.getAll(articles['all news']?.length || 0)

      commit('CHANGE_ARTICLES', { 'all news': [...(articles['all news'] || []), ...allArticles] })
    },
    async getAllArticlesCount({ commit }) {
      const allArticlesCount = await Articles.getAllCount()

      commit('CHANGE_COUNT', { 'all news': allArticlesCount })
    },
    async getTopicArticles({ commit, state }, topic) {
      const { articles } = state

      const topicArticles = await Articles.getTopic(topic, articles[topic]?.length || 0)

      commit('CHANGE_ARTICLES', { [topic]: [...(articles[topic] || []), ...topicArticles] })
    },
    async getTopicArticlesCount({ commit }, topic) {
      const topicArticlesCount = await Articles.getTopicCount(topic)

      commit('CHANGE_COUNT', { [topic]: topicArticlesCount })
    },
    async sync({ commit, dispatch }) {
      try {
        commit('CHANGE_SYNCHING', true)
        await Articles.sync()
        commit('CHANGE_SYNCHING', false)
      } catch(err) {
        commit('CHANGE_SYNCHING', false)
      }

      dispatch('loadData')
    },
  },
})
