import api from '@/services/api'

import Article from '@/models/Article'

class Articles {

  static sections = ['science', 'technology']

  static async getAll() {
    const data = await Promise.all(
      Articles.sections.map(
        async section => {
          const result = await Articles.getBy(section)

          return result[section]
        }
      )
    )

    const sectionsMerge = await Promise.resolve(
      Object.values(data)
        .reduce((all, section) => [...all, ...section])
    )

    const articlesSortedByPublishedDate = await Promise.resolve(
      sectionsMerge
        .sort((articleA, articleB) => articleB.publishedDate >= articleA.publishedDate ? 1 : -1)
    )

    return { all: articlesSortedByPublishedDate }
  }

  static async getBy(section) {
    const { data } = await api.get(`${section}.json`)

    const articles = data.results
      .map(result => new Article(result))

    return { [section]: articles }
  }

}

export default Articles
