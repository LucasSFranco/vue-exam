import { shallowMount } from '@vue/test-utils'

import NewsHeader from '@/components/molecules/NewsHeader.vue'

describe('News Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(NewsHeader)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
