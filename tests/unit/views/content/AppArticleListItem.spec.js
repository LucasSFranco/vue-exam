import { shallowMount } from '@vue/test-utils'

import AppArticleListItem from '@/views/content/AppArticleListItem.vue'

import Article from '@/models/Article'

import articles from '../../../fixtures/articles.json'

describe("Article List Item", () => {
  it("properly renders article data", () => {
    const article = new Article(articles[0])

    const wrapper = shallowMount(AppArticleListItem, {
      propsData: {
        article,
      },
    })

    const formattedArticle = article.format('LL')

    const image = wrapper.find('img').element
    const topic = wrapper.find('h6').element
    const title = wrapper.find('h3').element
    const publishedDate = wrapper.find('small').element

    expect(image.src).toBe(formattedArticle.multimedia.smallThumb.url)
    expect(image.alt).toBe(formattedArticle.multimedia.smallThumb.caption)
    expect(topic.textContent).toBe(formattedArticle.topic)
    expect(title.textContent).toBe(formattedArticle.title)
    expect(publishedDate.textContent).toBe(formattedArticle.publishedDate)

  })
})
