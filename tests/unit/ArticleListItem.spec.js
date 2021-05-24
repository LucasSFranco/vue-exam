import { shallowMount } from '@vue/test-utils'

import ArticleListItem from '@/components/molecules/ArticleListItem.vue'

import articles from '../fixtures/articles.json'

describe('Article List Item', () => {
  it('matches snapshot', () => {
    const article = articles[0]

    const wrapper = shallowMount(ArticleListItem, {
      propsData: {
        article
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
