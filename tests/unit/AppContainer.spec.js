import { shallowMount } from '@vue/test-utils'

import AppContainer from '@/components/atoms/AppContainer.vue'

describe('Container', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(AppContainer, {
      slots: {
        default: 'Slot Content'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
