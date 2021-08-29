<template>
  <IndexItem
    v-if="result && result.allCrawlers && result.allCrawlersCount"
    page-name="Crawlers"
    create-new-link="/admin/crawler/new"
    item-id="id"
    item-title="crawlerName"
    :items="result.allCrawlers"
    view-item-url="/admin/crawler"
    :items-count="result.allCrawlersCount"
    layout="grid-card"
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
          allCrawlers(page: $page) {
            id
            crawlerName
            createdAt
          }
          allCrawlersCount
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
