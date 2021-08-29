import { useContext, ref, reactive } from '@nuxtjs/composition-api'
// import gql from 'graphql-tag'
import { useQuery, useMutation } from '@vue/apollo-composable'

export default function useEditItem(params: any) {
  const { route } = useContext()
  const saveButtonState = ref<boolean>(false)
  const deleteButtonState = ref<boolean>(false)

  const snackbar = reactive({
    isOpen: false,
    text: '',
    color: '',
  })

  const { result } = useQuery(params.getQuery.query, {
    ...params.getQuery.vars,
  })

  // mutations
  const {
    mutate: mutateUpdate,
    onDone: onDoneUpdate,
    onError: onErrorUpdate,
  } = useMutation(params.updateMutation)

  const {
    mutate: mutateRemove,
    onDone: onDoneRemove,
    onError: onErrorRemove,
  } = useMutation(params.removeMutation)

  // Functions
  const updateMutation = (updateData: any) => {
    saveButtonState.value = true
    mutateUpdate(updateData)
  }

  const removeMutation = (removeData: any) => {
    deleteButtonState.value = true
    mutateRemove({ ...removeData })
  }

  // Warning Handlers
  onDoneUpdate((result) => {
    saveButtonState.value = false
    snackbar.text = `Salvo com sucesso! ${result.data}`
    snackbar.color = 'success'
    snackbar.isOpen = true
  })

  onErrorUpdate((error) => {
    console.log(error)
    saveButtonState.value = false
    snackbar.text = error.message
    snackbar.color = 'red'
    snackbar.isOpen = true
  })

  onDoneRemove((result) => {
    saveButtonState.value = false
    snackbar.text = `Removido com Sucesso! ${result.data}`
    snackbar.color = 'success'
    snackbar.isOpen = true
    return window.location.replace('/admin/laws')
  })

  onErrorRemove((error) => {
    console.log(error)
    saveButtonState.value = false
    snackbar.text = `Erro: ${error.message}`
    snackbar.color = 'red'
    snackbar.isOpen = true
  })

  return {
    result,
    route,
    snackbar,
    updateMutation,
    removeMutation,
    saveButtonState,
    deleteButtonState,
  }
}
