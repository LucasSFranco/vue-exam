<template>
  <section class="article list">
    <template v-if="!synching">
      <template
        v-for="(article, index) in selectedArticles"
        :key="article.id"
      >
        <ArticleModal :article="article">
          <template #trigger="modal">
            <ArticleListItem
              v-if="index === selectedArticles.length - 1"
              :article="article"
              @click="modal.open"
            />
            <ArticleListItem
              v-else
              :article="article"
              @click="modal.open"
            />
          </template>
        </ArticleModal>
      </template>
    </template>

    <div
      ref="scrollTrigger"
      class="scroll-trigger"
    />

    <template v-if="selectedArticlesCount !== selectedArticles.length">
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
      <ArticleListItemSkeleton />
    </template>
  </section>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import ArticleListItem from '@/components/molecules/ArticleListItem.vue'
import ArticleListItemSkeleton from '@/components/molecules/ArticleListItemSkeleton.vue'
import ArticleModal from '@/components/molecules/ArticleModal.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem,
    ArticleListItemSkeleton,
    ArticleModal
  },
  computed: {
    ...mapGetters([
      'selectedArticles',
      'selectedArticlesCount'
    ]),
    ...mapState([
      'selectedTopic',
      'synching'
    ])
  },
  mounted () {
    this.observer = new IntersectionObserver(entries => {
      const [entry] = entries
      if (entry.isIntersecting) {
        if (this.selectedArticles.length) {
          if (this.selectedTopic) {
            this.getTopicArticles(this.selectedTopic)
          } else {
            this.getAllArticles()
          }
        }
      }

      if (this.selectedArticlesCount === this.selectedArticles.length) {
        this.observer.disconnect()
      }
    })

    this.$watch(
      () => this.selectedTopic,
      () => {
        this.observer.observe(this.$refs.scrollTrigger)
      }, { immediate: true }
    )
  },
  methods: {
    ...mapActions([
      'getAllArticles',
      'getTopicArticles'
    ])
  }
}

</script>

<style lang="scss" scoped>

  .article.list {
    border-top: 2px solid var(--accent-primary);
    padding: 3rem 0;
  }

</style>
