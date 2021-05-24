import Article from '@/models/Article'
import api from '@/services/api'
import db from '@/services/dexie'

class Articles {
  static topics = ['science', 'technology']

  static async sync () {
    await Promise.all(
      Articles.topics.map(
        async topic => {
          const { data } = await api.get(`${topic}.json`)

          const articles = data.results
            .map(result => new Article({ topic, ...result }))

          await Promise.all(
            articles.map(async article => {
              const alreadyExists = await db.articles.get({ uri: article.uri })

              if (alreadyExists) return

              await db.articles.put(article)
            })
          )
        }
      )
    )
  }

  static async getAll (offset = 0) {
    const allArticles = await db.articles
      .reverse()
      .offset(offset)
      .limit(10)
      .toArray()

    return allArticles
  }

  static async getTopic (topic, offset = 0) {
    const topicArticles = await db.articles
      .where('topic')
      .equals(topic)
      .reverse()
      .offset(offset)
      .limit(10)
      .toArray()

    return topicArticles
  }

  static async getAllCount () {
    return db.articles
      .count()
  }

  static async getTopicCount (topic) {
    return db.articles
      .where('topic')
      .equals(topic)
      .count()
  }
}

export default Articles
