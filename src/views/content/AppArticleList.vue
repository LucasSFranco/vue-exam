<template>
  <section class="article-list">
    <div class="scrollbox">
      <AppArticleModal
        v-for="article in articles.all"
        :article="article"
        :ref="article.uri"
      >
        <template #trigger="modal">
          <AppArticleListItem
            :article="article"
            @click="modal.open"
          />
        </template>
      </AppArticleModal>
    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

import AppArticleListItem from '@/views/content/AppArticleListItem.vue'
import AppArticleModal from '@/views/content/AppArticleModal.vue'

export default {
  name: 'AppArticleList',
  components: {
    AppArticleListItem,
    AppArticleModal,
  },
  computed: {
    ...mapState(['articles']),
  },
  beforeMount() {
    console.log(this.articles)
  }
}

</script>

<style lang="sass" scoped>

  .article-list
    flex: 1 1 auto

    position: relative

    border-top: 2px solid var(--accent-primary)

    .scrollbox
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

      padding: 2rem 1rem

      overflow: hidden auto

      &::-webkit-scrollbar
        width: 4px
        height: 4px

      &::-webkit-scrollbar-track
        margin: 2rem 0
        border-right: 1px solid var(--accent-secondary)

      &:hover
        &::-webkit-scrollbar-thumb
          background: var(--accent-secondary)

</style>
