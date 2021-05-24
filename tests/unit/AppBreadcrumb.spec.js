import { shallowMount } from '@vue/test-utils'

import AppBreadcrumb from '@/components/atoms/AppBreadcrumb.vue'

describe('Breadcrumb', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(AppBreadcrumb, {
      props: {
        items: ['item-1', 'item-2', '']
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
