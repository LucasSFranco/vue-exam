<template>
  <div class="article list__item--skeleton">
    <div class="accessory">
      <span class="published-date" />
    </div>
    <div class="main">
      <span
        class="image"
        :style="{ 'padding-top': `${getRandomInteger(60, 110)}%` }"
      />
      <div
        v-if="getRandomInteger(1, 5) === 5"
        class="kicker"
      >
        <span
          v-for="(width, key) in kicker"
          :key="key"
          :style="{ 'width': `${width}px` }"
        />
      </div>
      <div class="title">
        <span
          v-for="(width, key) in title"
          :key="key"
          :style="{ 'width': `${width}px` }"
        />
      </div>
      <div class="abstract">
        <span
          v-for="(width, key) in abstract"
          :key="key"
          :style="{ 'width': `${width}px` }"
        />
      </div>
      <div class="by-line">
        <span
          v-for="(width, key) in byLine"
          :key="key"
          :style="{ 'width': `${width}px` }"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticleListItemSkeleton',
  computed: {
    kicker () {
      return this.getRandomRange(4, 7).map(id =>
        this.getRandomInteger(30, 70)
      )
    },
    title () {
      return this.getRandomRange(7, 12).map(id =>
        this.getRandomInteger(30, 80)
      )
    },
    abstract () {
      return this.getRandomRange(50, 70).map(id =>
        this.getRandomInteger(20, 80)
      )
    },
    byLine () {
      return this.getRandomRange(7, 13).map(id =>
        this.getRandomInteger(10, 50)
      )
    }
  },
  methods: {
    getRandomInteger (from, to) {
      return Math.round(Math.random() * (to - from)) + from
    },
    getRandomRange (from, to) {
      return [...new Array(this.getRandomInteger(from, to)).keys()]
    }
  }
}

</script>

<style lang="scss" scoped>

  .article.list__item--skeleton {
    display: flex;
    flex-direction: column;

    box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 5px rgba(0, 0, 0, .06);
    padding: 1rem;
    position: relative;

    animation: fadeInOut 1000ms ease-in-out infinite;

    span {
      width: 100%;

      display: inline-block;
      margin-right: .25rem;
      border-radius: 2px;
    }

    .accessory {
      border-top: 1px solid var(--accent-secondary);
      margin-top: .5rem;
      padding-top: .5rem;

      order: 2;

      .published-date {
        background: var(--text-secondary);
        height: .75rem;
        width: 72px;
      }

      @media (min-width: 768px) {
        border: initial;
        order: initial;
        padding: initial;

        margin: .25rem 0;
        flex: 0 0 7.5rem;
      }
    }

    .main {
      flex: 1 1 auto;

      .image {
        width: 100%;

        background: rgba(204, 204, 204, .5);

        @media (min-width: 768px) {
          padding: initial !important;

          width: 180px;
          height: 120px;

          float: right;
          margin: 0 0 1rem 1rem;
        }

        @media (min-width: 1280px) {
          width: 210px;
          height: 140px;
        }
      }

      .kicker {
        margin-bottom: .25rem;

        span {
          background: rgba(51, 51, 51, .5);
          height: .675rem;
        }
      }

      .title {
        margin-bottom: .5rem;

        span {
          background: rgba(0, 0, 0, .5);
          height: 1.25rem;
          margin-right: .3125rem;
        }
      }

      .abstract {
        margin-bottom: .5rem;

        span {
          background: rgba(51, 51, 51, .5);
          height: 1rem;
        }
      }

      .by-line {
        span {
          background: rgba(153, 153, 153, .5);
          height: .75rem;
        }
      }
    }

    small {
      color: rgba(153, 153, 153, .5);
      font-family: 'Roboto', sans-serif;
      font-size: .75rem;

      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    * + & {
      margin-top: 1.5rem;

      @media (min-width: 768px) {
        margin: initial;

        border-top: 1px solid var(--accent-secondary);
      }
    }

    @media (min-width: 768px) {
      box-shadow: initial;
      flex-direction: initial;

      padding: 1rem 3rem;
    }

    @media (min-width: 1280px) {
      padding: 1rem;
    }

    @keyframes fadeInOut {
      0% {
        opacity: .5;
      }

      50% {
        opacity: .75;
      }

      100% {
        opacity: .5;
      }
    }
  }

</style>
