<template>
  <main class="home">
    <AppContainer>
      <h1 class="title">News Portal</h1>
    </AppContainer>
    <AppContainer class="main">
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
    width: 100%
    height: 100%

    display: flex
    align-items: stretch
    flex-direction: column

    padding: 5rem 0

    .title
      color: var(--header-normal)
      font-family: 'Roboto', sans-serif
      font-weight: 700
      font-size: 2.625rem
      margin-bottom: .75rem

    .main
      display: flex
      flex-direction: column

      flex: 1 1 auto

</style>
