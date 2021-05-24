<template>
  <header class="news header">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.nytimes.com/"
      data-test="nyt-logo"
    >
      <img
        src="@/assets/logo.svg"
        alt="The New York Times"
      >
    </a>
  </header>
</template>

<script>

export default { name: 'NewsHeader' }

</script>

<style lang="scss" scoped>

  .news.header {
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid var(--accent-secondary);
    padding: .75rem 0;

    a {
      width: 185px;
      height: 25px;

      display: flex;
    }
  }

</style>
