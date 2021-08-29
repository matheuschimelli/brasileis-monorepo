<template>
  <article>
    <header>
      <h1>{{ title }}</h1>
      <p class="articleSummary">
        {{ summary }}
      </p>
    </header>
    <v-divider></v-divider>
    <div class="details">
      <time :datetime="publishDate">
        <span>{{ formatedDate(publishDate) }}</span>
      </time>
      <br />
      <b class="publishedBy">Publicado por: {{ publishedBy }}</b>
    </div>

    <section class="articleContent" v-html="content"></section>
  </article>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale({
  ...pt,
})
dayjs.tz.setDefault('America/Sao_Paulo')

export default defineComponent({
  props: {
    title: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    publishDate: {
      type: String,
      default: null,
    },
    publishedBy: {
      type: String,
      default: null,
    },
  },
  setup() {
    const formatedDate = (date: string) => {
      return dayjs(date).format('LL')
    }
    return {
      formatedDate,
    }
  },
})
</script>
<style lang="scss">
article {
  width: 50%;
  margin: 20px auto;
  color: #000 !important;
  h1 {
    font-family: 'IBM Plex Serif', serif !important;
    font-style: italic !important;
    font-size: 2.3em !important;
    line-height: 1.5em !important;
    padding-bottom: 20px !important;
  }
  .articleContent {
    padding-top: 20px;

    p {
      font-size: 1.25rem !important;
      font-family: 'IBM Plex Serif', serif !important;
      line-height: 1.5em !important;
    }

    p:first-child::first-letter {
      float: left !important;
      padding: 5px !important;
      font-size: 50px !important;
      font-family: 'IBM Plex Serif', serif !important;
      font-weight: bold !important;
      text-transform: uppercase !important;
      color: #000 !important;
      border-radius: 5px !important;
      margin-right: 5px !important;
    }
    p:not(:first-child) {
      text-indent: 30px !important;
    }
  }
  .details {
    padding-top: 20px !important;
    font-family: 'IBM Plex Sans', sans-serif !important;
    time {
      font-size: 14px !important;
    }
  }
}

.articleSummary {
  font-family: 'IBM Plex Sans', sans-serif;
  color: rgb(122, 122, 122);
}
.publishedBy {
  padding-top: 5px;
}
@media (max-width: 600px) {
  article {
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
  }
}
@media (max-width: 770px) {
  article {
    width: 90%;
    padding-left: 7px;
    padding-right: 7px;
  }
}
</style>
