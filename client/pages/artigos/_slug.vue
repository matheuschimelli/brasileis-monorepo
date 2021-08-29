<template>
  <main class="d-flex justify-center align-stretch">
    <ArticleView
      v-if="article"
      :title="article.title"
      :summary="article.summary"
      :content="article.content"
      :publish-date="article.updatedAt"
      :published-by="article.publishedBy"
    />
    <div v-else>artigo não encontrado</div>
  </main>
</template>
<script lang="ts">
import ArticleView from '@/components/Article/ArticleView.vue'
import gql from 'graphql-tag'
import Vue from 'vue'
export default Vue.extend({
  components: {
    ArticleView,
  },
  async asyncData({ app: { apolloProvider }, params }) {
    const query = gql`
      query($slug: String!) {
        Article(slug: $slug) {
          title
          summary
          featured
          content
          updatedAt
          createdAt
          categories {
            name
          }
          subCategories {
            name
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

      return {
        article: data.Article,
      }
    } catch (err) {
      return {
        article: null,
      }
    }
  },
})
</script>
