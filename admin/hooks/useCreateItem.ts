import { useContext, ref, reactive } from '@nuxtjs/composition-api'
import { useMutation } from '@vue/apollo-composable'

export default function useEditItem(
  params: any,
  redirectUrl: string,
  mutationName: string,
  idField: string
) {
  const { route } = useContext()
  const saveButtonState = ref<boolean>(false)

  const snackbar = reactive({
    isOpen: false,
    text: '',
    color: '',
  })

  // mutations
  const {
    mutate: mutateUpdate,
    onDone: onDoneUpdate,
    onError: onErrorUpdate,
  } = useMutation(params.updateMutation)

  // Functions
  const updateMutation = (updateData: any) => {
    saveButtonState.value = true
    mutateUpdate(updateData)
  }

  // Warning Handlers
  onDoneUpdate((result) => {
    saveButtonState.value = false
    snackbar.text = `Salvo com sucesso! ${result.data}`
    snackbar.color = 'success'
    snackbar.isOpen = true
    return window.location.replace(
      `${redirectUrl}/${result.data[mutationName][idField]}`
    )
  })

  onErrorUpdate((error) => {
    console.log(error)
    saveButtonState.value = false
    snackbar.text = error.message
    snackbar.color = 'red'
    snackbar.isOpen = true
  })

  return {
    route,
    snackbar,
    updateMutation,
    saveButtonState,
  }
}
