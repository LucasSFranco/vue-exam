<template>
  <AppContainer class="navbar">
    <h1>{{activeTab}}</h1>
    <nav>
      <a
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'selected': tab === activeTab }"
        @click="changeActiveTab(tab)"
      >
        {{tab}}
      </a>
    </nav>
  </AppContainer>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import AppContainer from '@/components/atoms/AppContainer.vue'

export default {
  name: 'NewsHeader',
  components: {
    AppContainer,
  },
  computed: {
    ...mapState([
      'activeTab',
      'tabs',
    ]),
  },
  created() {
    const { params } = this.$route

    if(params.topic)
      this.changeActiveTab(params.topic)
    else
      this.changeActiveTab('all news')
  },
  methods: {
    ...mapActions([
      'changeActiveTab',
    ])
  },
}

</script>

<style lang="scss" scoped>

  .navbar {
    margin-top: 5rem;

    h1 {
      color: var(--header-normal);
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2.625rem;
      margin-bottom: .75rem;
      text-transform: capitalize;
    }

    nav {
      border-top: 1px solid var(--accent-secondary);
      padding: .5rem 0;

      a {
        color: var(--text-primary);
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-size: .675rem;
        font-weight: 500;
        margin-bottom: .25rem;
        text-transform: uppercase;

        & + a {
          border-left: 1px solid var(--accent-secondary);
          margin-left: .5rem;
          padding-left: .5rem;
        }

        &:hover {
          text-decoration: underline;
        }

        &.selected {
          font-weight: 600;
        }
      }
    }
  }

</style>
