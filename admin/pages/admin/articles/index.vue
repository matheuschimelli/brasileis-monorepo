<template>
  <IndexItem
    v-if="result && result.allArticles && result.allArticlesCount"
    page-name="Artigos"
    create-new-link="/admin/articles/new"
    item-id="slug"
    item-title="title"
    :items="result.allArticles"
    view-item-url="/admin/articles"
    :items-count="result.allArticlesCount"
    @onLoadNextPage="loadNextPage"
  />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'

import IndexItem from '@/components/Item/IndexItem.vue'
import useQueryAllItems from '@/hooks/useQueryAllItems'

export default defineComponent({
  watchQuery: ['p'],
  middleware: 'admin',
  components: {
    IndexItem,
  },
  setup() {
    const { result, currentPage, pageCount, loadNextPage } = useQueryAllItems(
      gql`
        query($page: Int!) {
          allArticles(page: $page) {
            id
            title
            createdAt
            slug
          }
          allArticlesCount
        }
      `
    )
    return {
      result,
      currentPage,
      pageCount,
      loadNextPage,
    }
  },
})
</script>
