import { ref } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable'

// TODO fix query type
export default function useQueryAllItems(query: any) {
  const currentPage = ref(1)
  const pageCount = ref(0)

  const { result } = useQuery(query, {
    page: currentPage,
  })

  const loadNextPage = (data: any) => (currentPage.value = data)

  return {
    result,
    currentPage,
    pageCount,
    loadNextPage,
  }
}
