<template>
  <IndexItem
    v-if="result && result.allSubCategories && result.allSubCategories"
    page-name="Sub Categorias"
    create-new-link="/admin/sub-categories/new"
    item-id="slug"
    item-title="name"
    :items="result.allSubCategories"
    view-item-url="/admin/sub-categories"
    :items-count="result.allSubCategoriesCount"
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
          allSubCategories(page: $page) {
            id
            name
            slug
          }
          allSubCategoriesCount
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
