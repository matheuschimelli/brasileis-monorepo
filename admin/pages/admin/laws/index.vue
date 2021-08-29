<template>
  <IndexItem
    v-if="result && result.allLaws && result.allLawsCount"
    page-name="Leis Indexadas"
    item-id="slug"
    item-title="title"
    :items="result.allLaws"
    view-item-url="/admin/laws"
    :items-count="result.allLawsCount"
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
          allLaws(page: $page) {
            id
            title
            createdAt
            slug
            updatedAt
          }
          allLawsCount
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
