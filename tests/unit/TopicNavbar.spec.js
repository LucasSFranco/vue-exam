import { mount, RouterLinkStub } from '@vue/test-utils'

import TopicNavbar from '@/components/organisms/TopicNavbar.vue'

describe('Topic Navbar', () => {
  it('matches snapshot on root path', () => {
    const $store = {
      state: {
        selectedTopic: null,
        topics: ['science', 'technology']
      }
    }

    const wrapper = mount(TopicNavbar, {
      global: {
        mocks: { $store },
        stubs: {
          AppContainer: { template: '<slot />' },
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('matches snapshot on topic path', () => {
    const $store = {
      state: {
        selectedTopic: 'science',
        topics: ['science', 'technology']
      }
    }

    const wrapper = mount(TopicNavbar, {
      global: {
        mocks: { $store },
        stubs: {
          AppContainer: { template: '<slot />' },
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('properly changes url on nav-item click', () => {
    const $store = {
      state: {
        selectedTopic: null,
        topics: ['science', 'technology']
      }
    }

    const wrapper = mount(TopicNavbar, {
      global: {
        mocks: { $store },
        stubs: {
          AppContainer: { template: '<slot />' },
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.findAllComponents(RouterLinkStub)[0].props().to.name).toBe('all-articles')
    expect(wrapper.findAllComponents(RouterLinkStub)[1].props().to.name).toBe('topic-articles')
    expect(wrapper.findAllComponents(RouterLinkStub)[1].props().to.params.topic).toBe('science')
  })
})
