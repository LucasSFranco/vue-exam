<template>
  <main class="home">
    <AppContainer>
      <h1 class="title">News Portal</h1>
    </AppContainer>
    <AppContainer>
      <AppNewsList />
    </AppContainer>
  </main>
</template>

<script>

import AppContainer from '@/components/AppContainer.vue'
import AppNewsList from '@/views/content/AppNewsList.vue'

export default {
  name: 'AppHome',
  components: {
    AppContainer,

    AppNewsList,
  },
}

</script>

<style lang="sass" scoped>

  .home
    padding: 5rem 0

    .title
      color: var(--header-normal)
      font-family: 'Roboto', sans-serif
      font-weight: 700
      font-size: 2.625rem
      margin-bottom: .75rem

</style>
