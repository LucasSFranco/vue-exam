import { shallowMount } from '@vue/test-utils'

import ArticleModal from '@/components/molecules/ArticleModal.vue'

import articles from '../fixtures/articles.json'

describe('Article Modal', () => {
  it('matches snapshot', () => {
    const article = articles[0]

    const wrapper = shallowMount(ArticleModal, {
      propsData: {
        article
      },
      slots: {
        default: 'Modal Trigger'
      },
      global: {
        stubs: {
          Icon: true,
          AppModal: {
            template: '<slot name="trigger" /> <slot name="content" />'
          }
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
