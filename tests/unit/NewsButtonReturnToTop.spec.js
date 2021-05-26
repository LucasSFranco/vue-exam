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

  it('calls returnToTop() method on button click', () => {
    const wrapper = shallowMount(NewsButtonReturnToTop, {
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    wrapper.vm.returnToTop = jest.fn()

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.returnToTop).toHaveBeenCalled()
  })
})
