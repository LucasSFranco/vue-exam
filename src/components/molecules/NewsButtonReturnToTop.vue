<template>
  <button
    class="button return-to-top"
    @click="returnToTop"
  >
    <Icon icon="angle-double-up" />
  </button>
</template>

<script>

export default {
  name: 'NewsButtonReturnToTop',
  methods: {
    returnToTop() {
      document.querySelector('.scrollbox').scrollTop = 0
    },
  },
}

</script>

<style lang="scss" scoped>

  .button.return-to-top {
    width: 2.5rem;
    height: 2.5rem;

    background: var(--button-normal);
    color: var(--button-color);
    cursor: pointer;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 100ms background-color;

    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;

    &:hover {
      background: var(--button-hover);
    }

    &:active {
      background: var(--button-active);
    }
  }

</style>
