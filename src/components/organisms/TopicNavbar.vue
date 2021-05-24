<template>
  <AppContainer class="topic navbar">
    <h1 data-test="topic-navbar-title">
      {{ selectedTopic || 'all news' }}
    </h1>
    <nav>
      <router-link
        :class="{ 'selected': !selectedTopic }"
        :to="{ name: 'all-articles' }"
        data-test="topic-navbar-item"
      >
        all news
      </router-link>
      <router-link
        v-for="topic in topics"
        :key="topic"
        :class="{ 'selected': topic === selectedTopic }"
        :to="{
          name: 'topic-articles',
          params: { topic },
        }"
        data-test="topic-navbar-item"
      >
        {{ topic }}
      </router-link>
    </nav>
  </AppContainer>
</template>

<script>

import { mapState } from 'vuex'

import AppContainer from '@/components/atoms/AppContainer.vue'

export default {
  name: 'TopicNavbar',
  components: { AppContainer },
  computed: {
    ...mapState([
      'selectedTopic',
      'topics'
    ])
  }
}

</script>

<style lang="scss" scoped>

  .topic.navbar {
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
