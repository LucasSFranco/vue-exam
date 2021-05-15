<template>
  <AppModal>

    <template #default="modal">
      <slot :open="modal.open" />
    </template>

    <template #content>
      <div class="modal__news-card">
        <h3>Title</h3>
        <a target="_blank" href="#">URL</a>
        <p>Description</p>
      </div>
    </template>
  </AppModal>
</template>

<script>

import AppModal from '@/components/AppModal.vue'

export default {
  name: 'AppNewsModal',
  components: {
    AppModal,
  },
}

</script>

<style lang="sass" scoped>

  .modal__news-card
    width: 100vw
    max-width: 400px

    background: white
    box-shadow: 0 5px 10px rgba(0, 0, 0, .05)
    padding: 2rem 1.5rem

    h3
      color: var(--header-primary)
      font-size: 1.5rem

    a
      color: var(--text-link)
      font-family: 'Roboto', sans-serif
      font-size: .75rem

      &:hover
        text-decoration: underline

    p
      color: var(--text-normal)
      font-size: 1rem
      margin-top: 1.5rem

</style>
