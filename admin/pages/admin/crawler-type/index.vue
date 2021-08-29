<template>
  <IndexItem
    v-if="result && result.allCrawlerTypes && result.allCrawlerTypesCount"
    page-name="Tipos e Definições de Crawlers"
    create-new-link="/admin/crawler-type/new"
    item-id="id"
    item-title="name"
    :items="result.allCrawlerTypes"
    view-item-url="/admin/crawler-type"
    :items-count="result.allCrawlerTypesCount"
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
        query {
          allCrawlerTypes {
            id
            name
          }
          allCrawlerTypesCount
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
