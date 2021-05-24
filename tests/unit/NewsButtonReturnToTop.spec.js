import { shallowMount } from '@vue/test-utils'

import NewsButtonReturnToTop from '@/components/molecules/NewsButtonReturnToTop.vue'

describe('News Button Return To Top', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(NewsButtonReturnToTop, {
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
