<template>
  <router-view />
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  beforeMount() {
    this.sync()
  },
  methods: {
    ...mapActions([
      'sync',
    ]),
  },
}

</script>

<style lang="sass">

  @import "@/styles"

</style>
