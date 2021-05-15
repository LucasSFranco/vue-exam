<template>

  <slot :open="open" />

  <teleport to="body">
    <div
      v-if="isVisible"
      class="modal"
      @mousedown.self="close"
    >
      <div class="modal__content">
        <button
          class="modal__closer"
          @click="close"
        >
          <Icon :icon="['fas', 'times']" />
        </button>

        <slot name="content" />

      </div>
    </div>
  </teleport>
</template>

<script>

export default {
  name: 'AppModal',
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    open() {
      this.isVisible = true
    },
    close() {
      this.isVisible = false
    },
  },
}

</script>

<style lang="sass" scoped>

  .modal
    display: flex
    align-items: center
    justify-content: center

    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

    background: rgba(0, 0, 0, .25)
    padding: 1rem

    z-index: 999

    .modal__content
      position: relative

      .modal__closer
        position: absolute
        top: .75rem
        right: .75rem

        color: var(--text-muted)
        cursor: pointer
        font-size: 1.25rem

        transition: 50ms color

        z-index: 99

        &:hover
          color: var(--text-normal)

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
