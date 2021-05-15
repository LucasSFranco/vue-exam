<template>
  <div class="news-list__item">
    <img
      :src="news.multimedia[1].url"
      :alt="news.multimedia[1].caption"
    />
    <div>
      <h6>Science</h6>
      <h3>{{news.title}}</h3>
    </div>
    <small>{{published_date}}</small>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: 'AppNewsListItem',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    published_date: function() {
      return moment(this.news.published_date).format('LL')
    }
  }
}

</script>

<style lang="sass" scoped>

  .news-list__item
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
