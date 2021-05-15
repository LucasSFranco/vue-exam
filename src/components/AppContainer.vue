<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'AppContainer',
}

</script>

<style lang="sass" scoped>

  .container
    width: 100%

    margin: 0 1.5rem

    @media (min-width: 1280px)
      max-width: calc(1280px - 3rem)

      margin: 0 auto

</style>
