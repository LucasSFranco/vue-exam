<template>

  <slot
    name="trigger"
    :open="open"
  />

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
          <Icon icon="times" />
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

<style lang="scss" scoped>

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, .25);
    z-index: 999;

    .modal__content {
      position: relative;

      .modal__closer {
        position: absolute;
        top: .75rem;
        right: .75rem;

        color: var(--text-secondary);
        cursor: pointer;
        font-size: 1.25rem;
        z-index: 99;

        transition: 50ms color;

        &:hover {
          color: var(--text-primary);
        }
      }
    }
  }

</style>
