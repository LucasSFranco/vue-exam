<template>
  <section class="news-list">
    <div class="scrollbox">
      <AppNewsModal
        v-for="news in news.all"
        :news="news"
        :ref="news.uri"
      >
        <template #default="modal">
          <AppNewsListItem
            :news="news"
            @click="modal.open"
          />
        </template>
      </AppNewsModal>
    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

import AppNewsListItem from '@/views/content/AppNewsListItem.vue'
import AppNewsModal from '@/views/content/AppNewsModal.vue'

export default {
  name: 'AppNewsList',
  components: {
    AppNewsListItem,
    AppNewsModal,
  },
  computed: {
    ...mapState(['news'])
  }
}

</script>

<style lang="sass" scoped>

  .news-list
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
