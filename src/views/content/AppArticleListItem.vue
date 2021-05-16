<template>
  <div class="article-list__item">
    <img
      :src="formattedArticle.multimedia.smallThumb.url"
      :alt="formattedArticle.multimedia.smallThumb.caption"
    />
    <div>
      <h6>{{formattedArticle.topic}}</h6>
      <h3>{{formattedArticle.title}}</h3>
    </div>
    <small>{{formattedArticle.publishedDate}}</small>
  </div>
</template>

<script>

export default {
  name: 'AppArticleListItem',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedArticle() {
      return this.article.format('LL')
    },
  },
}

</script>

<style lang="sass" scoped>

  .article-list__item
    display: flex
    align-items: center
    gap: 1.5rem

    cursor: pointer
    padding: 1rem
    position: relative

    transition: 250ms border-color, 250ms box-shadow

    & + .stacked-list__item
      border-top: 1px solid var(--accent-secondary)

    img
      flex: 0 0 auto

      width: 75px
      height: 75px

    div
      flex: 1 1 auto

      overflow: hidden

      h3
        color: var(--header-normal)
        font-size: 1.5rem

        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

      h6
        color: var(--text-normal)
        font-family: 'Roboto', sans-serif
        font-size: .675rem
        font-weight: 500
        margin-bottom: .25rem
        text-transform: uppercase

    small
      color: var(--text-muted)
      font-family: 'Roboto', sans-serif
      font-size: .75rem

      position: absolute
      top: 1rem
      right: 1rem

    &:hover
      box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 5px rgba(0, 0, 0, .06)
      border-color: transparent

      & + .stacked-list__item
        border-color: transparent

      h3
        text-decoration: underline
        text-decoration-thickness: 2px

</style>
