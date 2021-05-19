import api from '@/services/api'

import Article from '@/models/Article'

class Articles {

  static topics = ['science', 'technology']

  static async getAll() {
    const data = await Promise.all(
      Articles.topics.map(
        async topic => {
          const result = await Articles.getBy(topic)

          return result[topic]
        }
      )
    )

    const topicsMerge = await Promise.resolve(
      Object.values(data)
        .reduce((all, section) => [...all, ...section])
    )

    const articlesSortedByPublishedDate = await Promise.resolve(
      topicsMerge
        .sort((articleA, articleB) => articleB.publishedDate >= articleA.publishedDate ? 1 : -1)
    )

    return { all: articlesSortedByPublishedDate }
  }

  static async getBy(topic) {
    const { data } = await api.get(`${topic}.json`)

    const articles = data.results
      .map(result => new Article({ topic, ...result }))

    return { [topic]: articles }
  }

}

export default Articles
