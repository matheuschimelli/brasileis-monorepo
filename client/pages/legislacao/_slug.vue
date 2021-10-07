<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="3"></v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <h1 class="text-center text-lg">{{ result.title }}</h1>
        <div v-html="result.htmlContent"></div>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3"></v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <v-container v-if="$vuetify.breakpoint.mdAndUp">
      <div v-if="law.htmlContent">
        <LawReference
          v-if="showLawRef"
          ref="lawReferenceBox"
          class="lawBox"
          :style="{ top: lawBoxY + 'px', left: lawBoxX + 'px' }"
          :law-reference-data="referenceBoxData"
          @mouseout="closeBox"
        />
        <section class="post-container">
          <div class="post-content">
            <LawViewerDesktop :law="law" :html-content="htmlContent" />
          </div>
        </section>
      </div>
    </v-container>
    <LawViewerMobile
      v-if="$vuetify.breakpoint.smAndDown"
      :law="law"
      :html-content="htmlContent"
    />
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  // @ts-ignore
  async asyncData({ app: { apolloProvider }, params }) {
    console.log('RUNNING ASYNCDATA')
    const query = gql`
      query ($slug: String!) {
        Law(slug: $slug) {
          title
          url
          htmlContent
          updatedAt
          categories {
            name
            slug
          }
          subCategories {
            name
            slug
          }
        }
      }
    `
    const variables = { slug: params.slug }
    try {
      const { data } = await apolloProvider.clients.defaultClient.query({
        query,
        variables,
      })
      console.log(data)

      return {
        result: data.Law,
      }
    } catch (err) {
      return {
        result: null,
      }
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.result.title || 'Nada encontrado',
    }
  },
})
</script>

<!--
<script lang="ts">
import gql from 'graphql-tag'
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ app: { apolloProvider }, params }) {
    const query = gql`
      query ($slug: String!) {
        Law(slug: $slug) {
          title
          url
          htmlContent
          updatedAt
          categories {
            name
            slug
          }
          subCategories {
            name
            slug
          }
        }
      }
    `
    const variables = { slug: params.slug }
    try {
      const { data } = await apolloProvider.clients.defaultClient.query({
        query,
        variables,
      })
      console.log(data.Law)

      return {
        result: data.Law,
      }
    } catch (err) {
      return {
        result: null,
      }
    }
  },
})
</script>
-->
<!--
<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import LawReference from '@/components/LawReference'
import LawViewerDesktop from '@/components/LawViewerDesktop'
import LawViewerMobile from '@/components/LawViewerMobile'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale({
  ...pt,
})
export default {
  components: {
    LawReference,
    LawViewerDesktop,
    LawViewerMobile,
  },
  amp: 'hybrid',
  ampLayout: 'default.amp',
  async asyncData({ params, $axios, error }) {
    try {
      const { data } = await $axios.get(`/laws/${params.slug}`)
      if (!data.success === false)
        return error({ statusCode: 404, message: 'Página não encontrada' })

      return { law: data.law, htmlContent: data.content }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      readTime: null,
      showLawRef: false,
      lawBoxY: 0,
      lawBoxX: 0,
      referenceBoxData: {},
    }
  },
  head() {
    return {
      title: this.law.title,
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.law.summary,
        },

        {
          name: 'keywords',
          content: this.law.categories.map((category) => category),
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://brasileis.com.br/legislacao/${this.law.slug}`,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://brasileis.com.br/legislacao/${this.law.slug}`,
      },
      headline: `${this.law.title}`,
      description: `${this.law.summary}`,
      image: [this.law.cover],
      author: {
        '@type': 'Organization',
        name: 'Brasileis',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Brasileis',
        url: 'https://brasileis.com.br',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/brasileis/image/upload/v1593274723/small_logobrasileis5_c26b976154.png',
          width: 892,
          height: 142,
        },
        datePublished: `${dayjs(this.law.createdAt).toISOString()}`,
        dateModified: `${dayjs(this.law.updatedAt).toISOString()}`,
      },
    }
  },
}
</script>

<style scoped>
.fixedAppBar {
  position: fixed;
}
.theme--light.v-card > .v-card__text,
.theme--light.v-card .v-card__subtitle {
  font-size: 18px;
  line-height: 2rem;
  font-family: 'Roboto', sans-serif;
  color: black !important;
}

.summary {
  color: #838383;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

h1 {
  word-break: break-word;
}

.lawBox {
  position: absolute;
  z-index: 1000;
}
</style>
-->
