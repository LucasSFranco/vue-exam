<template>
  <main class="app">
    <div class="container">
      <h1 class="title">News Portal</h1>
    </div>
    <div class="container">
      <section class="stacked-list">
        <div class="stacked-list__item">
          <img src="" alt="">
          <div>
            <h6>Section</h6>
            <h3>Title</h3>
          </div>
          <small>DATE</small>
        </div>
      </section>
    </div>
  </main>
  <div class="modal" v-show="false">
    <div class="modal__content">
      <button class="modal__closer">
        <Icon :icon="['fas', 'times']" />
      </button>
      <div class="card">
        <h3>Title</h3>
        <a target="_blank" href="#">URL</a>
        <p>Description</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="sass">

  @import "@/styles"

  .app
    padding: 5rem 0

    .container
      margin: 0 1.5rem

      @media (min-width: 1280px)
        max-width: calc(1280px - 3rem)

        margin: 0 auto

      .title
        color: var(--header-normal)
        font-family: 'Roboto', sans-serif
        font-weight: 700
        font-size: 2.625rem
        margin-bottom: .75rem

      .stacked-list
        padding: 2rem 0
        border-top: 2px solid var(--accent-primary)

        .stacked-list__item
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

    .modal__content
      width: 100%
      max-width: 400px

      background: white
      box-shadow: 0 5px 10px rgba(0, 0, 0, .05)
      padding: 2rem 1.5rem

      position: relative

      .modal__closer
        position: absolute
        top: .75rem
        right: .75rem

        color: var(--text-muted)
        cursor: pointer
        font-size: 1.25rem

        transition: 50ms color

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
