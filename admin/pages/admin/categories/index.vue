<template>
  <IndexItem
    v-if="result && result.allCategories && result.allCategoriesCount"
    page-name="Categorias"
    create-new-link="/admin/categories/new"
    item-id="slug"
    item-title="name"
    :items="result.allCategories"
    view-item-url="/admin/categories"
    :items-count="result.allCategoriesCount"
    layout="grid"
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
          allCategories(page: $page) {
            id
            name
            slug
          }
          allCategoriesCount
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
