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

  it('shows on open() method call', () => {
    const wrapper = shallowMount(AppModal, {
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    expect(wrapper.vm.isVisible).toBe(false)
    wrapper.vm.open()
    expect(wrapper.vm.isVisible).toBe(true)
  })

  it('hides on close() method call', () => {
    const wrapper = shallowMount(AppModal, {
      data () {
        return {
          isVisible: true
        }
      },
      global: {
        stubs: {
          Icon: true
        }
      }
    })

    expect(wrapper.vm.isVisible).toBe(true)
    wrapper.vm.close()
    expect(wrapper.vm.isVisible).toBe(false)
  })
})
