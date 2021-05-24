import { createStore } from 'vuex'

import Articles from '@/services/Articles'

export default createStore({
  state: {
    articles: {},
    count: {},
    selectedTopic: null,
    synching: false,
    topics: Articles.topics
  },

  getters: {
    selectedArticles (state) {
      return state.articles[state.selectedTopic || 'all'] || []
    },
    selectedArticlesCount (state) {
      return state.count[state.selectedTopic || 'all']
    }
  },

  mutations: {
    CHANGE_SELECTED_TOPIC: (state, payload) => {
      state.selectedTopic = payload
    },
    CHANGE_ARTICLES: (state, payload) => {
      state.articles = { ...state.articles, ...payload }
    },
    CHANGE_COUNT: (state, payload) => {
      state.count = { ...state.count, ...payload }
    },
    CHANGE_SYNCHING: (state, payload) => {
      state.synching = payload
    }
  },

  actions: {
    changeSelectedTopic ({ commit }, topic) {
      commit('CHANGE_SELECTED_TOPIC', topic || null)
    },
    async getAllArticles ({ commit, state }) {
      const { articles } = state

      const allArticles = await Articles.getAll(articles.all?.length || 0)

      commit('CHANGE_ARTICLES', { all: [...(articles.all || []), ...allArticles] })
    },
    async getAllArticlesCount ({ commit }) {
      const allArticlesCount = await Articles.getAllCount()

      commit('CHANGE_COUNT', { all: allArticlesCount })
    },
    async getTopicArticles ({ commit, state }, topic) {
      const { articles } = state

      const topicArticles = await Articles.getTopic(topic, articles[topic]?.length || 0)

      commit('CHANGE_ARTICLES', { [topic]: [...(articles[topic] || []), ...topicArticles] })
    },
    async getTopicArticlesCount ({ commit }, topic) {
      const topicArticlesCount = await Articles.getTopicCount(topic)

      commit('CHANGE_COUNT', { [topic]: topicArticlesCount })
    },
    async sync ({ commit }) {
      try {
        commit('CHANGE_SYNCHING', true)
        await Articles.sync()
        commit('CHANGE_SYNCHING', false)
      } catch (err) {
        commit('CHANGE_SYNCHING', false)
      }
    }
  }
})
