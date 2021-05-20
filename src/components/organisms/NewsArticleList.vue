<template>
  <section class="article list">
    <template v-if="!synching">
      <template
        v-for="(article, pos) in (articles[activeTab] || [])"
        :key="article.id"
      >
        <NewsArticleModal
          :article="article"
        >
          <template #trigger="modal">
            <NewsArticleListItem
              v-if="pos + 1 === articles[activeTab].length"
              ref="lastArticle"
              :article="article"
              @click="modal.open"
            />
            <NewsArticleListItem
              v-else
              :article="article"
              @click="modal.open"
            />
          </template>
        </NewsArticleModal>
      </template>
    </template>

    <div ref="scrollTrigger" />

    <NewsArticleListItemSkeleton v-if="count[activeTab] !== (articles[activeTab]?.length || [])" v-for="item in 10" :key="item" />

  </section>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import NewsArticleListItem from '@/components/molecules/NewsArticleListItem.vue'
import NewsArticleListItemSkeleton from '@/components/molecules/NewsArticleListItemSkeleton.vue'
import NewsArticleModal from '@/components/molecules/NewsArticleModal.vue'

export default {
  name: 'NewsHeader',
  components: {
    NewsArticleListItem,
    NewsArticleListItemSkeleton,
    NewsArticleModal,
  },
  computed: {
    ...mapState([
      'activeTab',
      'articles',
      'count',
      'synching',
    ]),
  },
  mounted() {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      if(entry.isIntersecting) {
        if(this.articles[this.activeTab]?.length) {
          if(this.activeTab !== 'all news')
            this.getTopicArticles(this.activeTab)
          else
            this.getAllArticles()
        }
      }

      if(this.count[this.activeTab] === (this.articles[this.activeTab]?.length || [])) {
        observer.disconnect()
      }
    })

    observer.observe(this.$refs.scrollTrigger)
  },
  methods: {
    ...mapActions([
      'getAllArticles',
      'getTopicArticles',
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
