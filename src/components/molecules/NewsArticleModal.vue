<template>
  <AppModal>

    <template #trigger="modal">
      <slot
        name="trigger"
        :open="modal.open"
      />
    </template>

    <template #content>
      <div class="article">
        <div class="header">
            <AppBreadcrumb
              :items="[
                formattedArticle.topic,
                formattedArticle.section,
                formattedArticle.subsection,
              ]"
            />
          </div>
          <div class="body">
            <figure>
              <picture :style="{ 'padding-top': `${aspectRatio * 100}%` }">
                <img
                  :src="formattedArticle.multimedia.fullImage.url"
                  :alt="formattedArticle.multimedia.fullImage.caption"
                />
              </picture>
              <figcaption>
                {{formattedArticle.multimedia.fullImage.caption}}
                <span>{{formattedArticle.multimedia.fullImage.copyright}}</span>
              </figcaption>
            </figure>
            <div>
              <h6>{{formattedArticle.kicker}}</h6>
              <h3>{{formattedArticle.title}}</h3>
              <span>{{formattedArticle.byLine}}</span>
              <span>{{formattedArticle.publishedDate}}</span>
              <p>{{formattedArticle.abstract}}</p>
            </div>
          </div>
          <div class="footer">
            <a
              class="button"
              target="_blank"
              rel="noreferrer"
              :href="formattedArticle.url"
            >
              <Icon icon="external-link-alt" />
              READ
            </a>
          </div>
      </div>
    </template>
  </AppModal>
</template>

<script>

import AppBreadcrumb from '@/components/atoms/AppBreadcrumb.vue'
import AppModal from '@/components/atoms/AppModal.vue'
import Article from '@/models/Article'

export default {
  name: 'NewsArticleModal',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    AppBreadcrumb,
    AppModal,
  },
  computed: {
    aspectRatio() {
      return this.article.multimedia.fullImage.height / this.article.multimedia.fullImage.width
    },
    formattedArticle() {
      return new Article(this.article).format()
    },
  },
}

</script>

<style lang="scss" scoped>

  .article {
    width: calc(100vw - 3rem);

    background: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .05);

    .header {
      padding: 1rem 1.5rem;
      position: relative;

      &::after {
        content: '';

        height: .25rem;

        position: absolute;
        top: 100%;
        left: 0;
        right: 0;

        background: linear-gradient(to bottom, white, transparent);
        z-index: 99;
      }
    }

    .body {
      max-height: 60vh;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      overflow: hidden scroll;
      padding: .25rem calc(1.5rem - 8px) .25rem 1.5rem;
      position: relative;

      figure {
        flex: 0 0 auto;

        margin-bottom: 2rem;
        order: 2;

        picture {
          display: block;
          position: relative;

          img {
            width: 100%;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }

        figcaption {
          color: var(--text-secondary);
          font-family: 'Roboto', sans-serif;
          font-size: .75rem;

          span {
            color: var(--text-muted);
            font-size: inherit;

            &:before {
              content: ' ';
            }
          }

          @media (min-width: 768px) {
            font-size: .625rem;
          }
        }

        @media (min-width: 768px) {
          order: initial;

          width: 300px;
        }
      }

      h6 {
        color: var(--text-primary);
        font-family: 'Roboto', sans-serif;
        font-size: .675rem;
        font-weight: 500;
        margin-bottom: .25rem;
        text-transform: uppercase;
      }

      h3 {
        color: var(--header-normal);
        font-size: 1.375rem;
        line-height: 1.625rem;
      }

      p {
        color: var(--text-primary);
        font-size: 1.25rem;
        line-height: 1.375rem;
        margin-top: 1rem;
      }

      span {
        color: var(--text-secondary);
        font-family: 'Roboto', sans-serif;
        font-size: .75rem;

        & + span {
          &:before {
            content: '•';

            color: var(--text-muted);
            margin: 0 .25rem;
          }
        }
      }

      &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      &:hover {
        &::-webkit-scrollbar-thumb {
          background: var(--text-muted);
          background-clip: padding-box;
          border: 4px solid transparent;
        }
      }

      @media (min-width: 768px) {
        flex-direction: initial;
      }
    }

    .footer {
      padding: 1.5rem;
      position: relative;

      .button {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        background: var(--button-normal);
        color: var(--button-color);
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-size: .875rem;
        font-weight: 700;
        padding: .625rem 1rem;

        transition: 100ms background-color;

        &:hover {
          background: var(--button-hover);
        }

        &:active {
          background: var(--button-active);
        }
      }

      &::before {
        content: '';

        height: .25rem;

        position: absolute;
        left: 0;
        right: 0;
        bottom: 100%;

        background: linear-gradient(to top, white, transparent);
        z-index: 99;
      }
    }

    @media (min-width: 768px) {
      width: 720px;
    }
  }

</style>
