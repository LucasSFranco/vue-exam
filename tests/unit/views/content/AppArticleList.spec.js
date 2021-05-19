import { shallowMount } from '@vue/test-utils'

import AppArticleList from '@/views/content/AppArticleList.vue'

import articles from '../../../fixtures/articles.json'

describe("Article List Item", () => {
  const $store = {
    state: {
      articles: { all: articles },
    },
  }

  it("properly renders article data", () => {
    const wrapper = shallowMount(AppArticleList, {
      global: {
        stubs: {
          AppArticleModal: {
            template: '<div class="list-item-modal"> <slot name="trigger" /> </div>'
          },
          AppArticleListItem: {
            template: '<div class="list-item" />'
          },
        },
        mocks: { $store },
      },
    })

    const listItemModals = wrapper.findAll('.list-item-modal')
    const listItems = wrapper.findAll('.list-item')

    expect(listItemModals).toHaveLength(articles.length)
    expect(listItems).toHaveLength(articles.length)

  })

  it("opens modal on list item click", () => {
    const open = jest.fn()

    const wrapper = shallowMount(AppArticleList, {
      global: {
        stubs: {
          AppArticleModal: {
            template: '<div> <slot name="trigger" :open="open" /> </div>',
            methods: { open },
          },
          AppArticleListItem: {
            template: '<div class="list-item" />'
          },
        },
        mocks: { $store },
      },
    })

    wrapper.find('.list-item').trigger('click')

    expect(open).toHaveBeenCalled()

  })
})
