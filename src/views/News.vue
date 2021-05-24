<template>
  <main class="news view">
    <NewsHeader />
    <div class="content">
      <div
        class="scrollbox"
        data-test="news-scrollbox"
      >
        <TopicNavbar />
        <AppContainer data-test="news-list-container">
          <ArticleList />
        </AppContainer>
      </div>
      <NewsButtonReturnToTop />
    </div>
  </main>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import AppContainer from '@/components/atoms/AppContainer.vue'
import NewsButtonReturnToTop from '@/components/molecules/NewsButtonReturnToTop.vue'
import NewsHeader from '@/components/molecules/NewsHeader.vue'
import ArticleList from '@/components/organisms/ArticleList.vue'
import TopicNavbar from '@/components/organisms/TopicNavbar.vue'

export default {
  name: 'AllArticles',
  components: {
    AppContainer,
    NewsButtonReturnToTop,
    NewsHeader,
    ArticleList,
    TopicNavbar
  },
  computed: {
    ...mapState([
      'articles',
      'selectedTopic',
      'synching'
    ])
  },
  created () {
    this.sync()

    this.$watch(
      () => this.$route.params.topic,
      (topic) => this.changeSelectedTopic(topic),
      { immediate: true }
    )

    this.$watch(
      () => [this.synching, this.selectedTopic],
      () => {
        if (!this.synching && !this.articles[this.selectedTopic || 'all']) {
          if (this.selectedTopic) {
            this.getTopicArticles(this.selectedTopic)
            this.getTopicArticlesCount(this.selectedTopic)
          } else {
            this.getAllArticles()
            this.getAllArticlesCount()
          }
        }
      }, { immediate: true }
    )
  },
  methods: {
    ...mapActions([
      'changeSelectedTopic',
      'getAllArticles',
      'getAllArticlesCount',
      'getTopicArticles',
      'getTopicArticlesCount',
      'sync'
    ])
  }
}

</script>

<style lang="scss" scoped>

  .news.view {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    .content {
      flex: 1 1 auto;
      position: relative;

      .scrollbox {
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
