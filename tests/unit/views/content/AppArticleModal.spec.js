import { shallowMount } from '@vue/test-utils'

import AppArticleModal from '@/views/content/AppArticleModal.vue'

import articles from '../../../fixtures/articles.json'

describe("Article Modal", () => {
  it("properly renders article data", () => {
    const article = articles[0]

    const wrapper = shallowMount(AppArticleModal, {
      propsData: {
        article,
      },
      global: {
        stubs: {
          AppModal: {
            template: '<slot name="trigger" /> <slot name="content" />',
          },
        },
      },
    })

    const title = wrapper.find('h3').element
    const url = wrapper.find('a').element
    const abstract = wrapper.find('p').element

    expect(title.textContent).toBe(article.title)
    expect(url.textContent).toBe(article.url)
    expect(abstract.textContent).toBe(article.abstract)

  })
})
