<template>
  <section class="news-list">
    <AppNewsModal>
      <template #default="modal">
        <AppNewsListItem @click="modal.open" />
      </template>
    </AppNewsModal>
  </section>
</template>

<script>

import AppNewsListItem from '@/views/content/AppNewsListItem.vue'
import AppNewsModal from '@/views/content/AppNewsModal.vue'

export default {
  name: 'AppNewsList',
  components: {
    AppNewsListItem,
    AppNewsModal,
  },
}

</script>

<style lang="sass" scoped>

  .news-list
    padding: 2rem 0
    border-top: 2px solid var(--accent-primary)

</style>
