<template>
  <IndexItem
    v-if="
      result && result.searchUserAccount && result.searchUserAccount.peticoes
    "
    page-name="Resultados da busca pessoal"
    item-id="id"
    item-title="titulo"
    :items="result.searchUserAccount.peticoes"
    view-item-url="/escritorio/peticoes"
    :items-count="1"
    @onLoadNextPage="loadNextPage"
  />
</template>
<script lang="ts">
import { defineComponent, ref, useRoute } from '@nuxtjs/composition-api'
import dayjs from 'dayjs'
import gql from 'graphql-tag'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import IndexItem from '@/components/Item/IndexItem.vue'

import { useQuery } from '@vue/apollo-composable/dist'

// import useQueryAllItems from '@/hooks/useQueryAllItems'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default defineComponent({
  middleware: ['auth', 'hasEscritorio'],
  layout: 'escritorio',
  components: {
    IndexItem,
  },
  setup() {
    const currentPage = ref(1)
    const pageCount = ref(0)
    const route = useRoute()

    const { result } = useQuery(
      gql`
        query($page: Int!, $searchTerm: String!) {
          searchUserAccount(page: $page, term: $searchTerm) {
            peticoes {
              id
              titulo
            }
          }
        }
      `,
      {
        page: route.value.query.page || 1,
        searchTerm: route.value.query.q,
      }
    )

    const loadNextPage = (data: any) => (currentPage.value = data)

    return {
      result,
      currentPage,
      pageCount,
      loadNextPage,
    }
  },
})
</script>
