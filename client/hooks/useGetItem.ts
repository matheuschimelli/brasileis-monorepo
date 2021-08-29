import { useQuery } from '@vue/apollo-composable'

export default function useGetItem(query: any, vars: any) {
  const { result } = useQuery(query, { ...vars })

  return {
    result,
  }
}
