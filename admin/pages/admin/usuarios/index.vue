<template>
  <IndexItem
    v-if="result && result.allUsers && result.allUsersCount"
    page-name="Usuários"
    item-id="id"
    item-title="name"
    :items="result.allUsers"
    view-item-url="/admin/usuarios"
    :items-count="result.allUsersCount"
    layout="list"
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
          allUsers(page: $page) {
            id
            name
          }
          allUsersCount
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
