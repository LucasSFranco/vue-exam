import { shallowMount } from '@vue/test-utils'

import ArticleListItemSkeleton from '@/components/molecules/ArticleListItemSkeleton.vue'

describe('Article List Item Skeleton', () => {
  it('render properly', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)

    const wrapper = shallowMount(ArticleListItemSkeleton)

    expect(wrapper.find('.published-date').exists()).toBe(true)
    expect(wrapper.find('.image').attributes().style).toMatch(/padding-top/)
    expect(wrapper.find('.kicker span').exists()).toBe(true)
    expect(wrapper.find('.title span').exists()).toBe(true)
    expect(wrapper.find('.abstract span').exists()).toBe(true)
    expect(wrapper.find('.by-line span').exists()).toBe(true)
  })
})
