<template>
  <div class="breadcrumb">
    <template
      v-for="(item, order) in items"
      :key="order"
    >
      <span v-if="order !== 0">
        <Icon icon="chevron-right" />
        {{item}}
      </span>
      <span v-else>
        {{item}}
      </span>
    </template>
  </div>
</template>

<script>

export default {
  name: 'AppBreadcrumb',
  props: {
    items: {
      required: true,
      type: Array,
    }
  }
}

</script>

<style lang="scss" scoped>

  .breadcrumb {
    span {
      color: var(--text-secondary);
      font-size: .75rem;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;

      svg {
        color: var(--text-muted);
        margin: 0 .25rem;
      }
    }
  }

</style>
