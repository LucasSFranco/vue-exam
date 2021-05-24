import { shallowMount } from '@vue/test-utils'

import AppModal from '@/components/atoms/AppModal.vue'

describe('Modal', () => {
  it('properly renders snapshot', () => {
    const wrapper = shallowMount(AppModal, {
      slots: {
        trigger: 'Modal Trigger',
        content: 'Modal Content'
      },
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
