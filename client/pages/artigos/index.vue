<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="3">
        <v-card outlined class="sidebar">
          <v-card-title>Artigos Publicados</v-card-title>
          <v-card-text>
            Todos os artigos e notícias publicadas pelo Brasileis
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="9" lg="9">
        <v-card
          v-for="article in allArticles"
          :key="article.id"
          outlined
          class="articleCard mb-10"
          :to="`/artigos/${article.slug}`"
        >
          <v-card-title class="cardTitle">{{ article.title }}</v-card-title>
          <v-card-text>{{ article.summary }}</v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'

export default Vue.extend({
  async asyncData({ app: { apolloProvider }, params }) {
    const query = gql`
      query {
        allArticles(page: 1) {
          title
          featured
          summary
          #imgCover
          content
          slug
          updatedAt
        }
      }
    `
    // const variables = { slug: params.slug }
    try {
      const { data } = await apolloProvider.clients.defaultClient.query({
        query,
      })
      console.log(data)

      return {
        allArticles: data.allArticles,
      }
    } catch (err) {
      return {
        allArticles: null,
      }
    }
  },
})
</script>
<style scoped>
.articleCard {
  border: none !important;
  background: #fff !important;
}
.cardTitle {
  font-family: 'IBM Plex Serif', serif;
  line-height: 1.5em !important;
  word-break: normal !important;
  font-weight: bold !important;
  font-size: 1.5em;
}
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 77px;
}
</style>
