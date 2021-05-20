<template>
  <main class="news">
    <NewsHeader />
    <div class="content">
      <div class="scrollbox">
        <NewsNavbar />
        <AppContainer>
          <NewsArticleList />
        </AppContainer>
      </div>
      <NewsButtonReturnToTop />
    </div>
  </main>
</template>

<script>

import AppContainer from '@/components/atoms/AppContainer.vue'
import NewsButtonReturnToTop from '@/components/molecules/NewsButtonReturnToTop.vue'
import NewsHeader from '@/components/molecules/NewsHeader.vue'
import NewsArticleList from '@/components/organisms/NewsArticleList.vue'
import NewsNavbar from '@/components/organisms/NewsNavbar.vue'

export default {
  name: 'AppHome',
  components: {
    AppContainer,
    NewsButtonReturnToTop,
    NewsHeader,
    NewsArticleList,
    NewsNavbar,
  },
}

</script>

<style lang="scss" scoped>

  .news {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    & > .content {
      flex: 1 1 auto;
      position: relative;

      & > .scrollbox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        scroll-behavior: smooth;
        overflow: hidden scroll;
        overflow-anchor: none;

        &::-webkit-scrollbar {
          width: 16px;
          height: 16px;
        }

        &::-webkit-scrollbar-thumb {
          background: var(--accent-secondary);
          background-clip: padding-box;
          border: 4px solid transparent;
        }
      }
    }
  }

</style>
