<template>
  <div>
    <v-container>
      <v-snackbar
        v-model="snackbar.isOpen"
        :timeout="2000"
        top
        centered
        :color="snackbar.color"
      >
        {{ snackbar.text }}
      </v-snackbar>
    </v-container>
    <EditItem
      v-if="result && result.SubCategory"
      update-button
      delete-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
    >
      <SubCategoryView v-model="result.SubCategory" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  reactive,
} from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@vue/apollo-composable'
import EditItem from '@/components/Item/EditItem.vue'
import SubCategoryView from '@/components/SubCategory/SubCategoryView.vue'
export default defineComponent({
  components: {
    EditItem,
    SubCategoryView,
  },
  setup() {
    const { route } = useContext()
    const saveButtonState = ref<boolean>(false)
    const deleteButtonState = ref<boolean>(false)
    const snackbar = reactive({
      isOpen: false,
      text: '',
      color: '',
    })
    const { result } = useQuery(
      gql`
        query($slug: String!) {
          SubCategory(slug: $slug) {
            id
            name
          }
        }
      `,
      { slug: route.value.params.id }
    )

    // mutations
    const {
      mutate: mutateUpdate,
      onDone: onDoneUpdate,
      onError: onErrorUpdate,
    } = useMutation(
      gql`
        mutation updateArticle(
          $id: String!
          $mutationData: UpdateSubCategoryInput!
        ) {
          updateSubCategory(id: $id, data: $mutationData) {
            id
            name
          }
        }
      `
    )

    const {
      mutate: mutateRemove,
      onDone: onDoneRemove,
      onError: onErrorRemove,
    } = useMutation(
      gql`
        mutation removeItem($id: ID!) {
          deleteSubCategory(id: $id)
        }
      `
    )

    // Functions

    const handleUpdate = () => {
      saveButtonState.value = true
      mutateUpdate({
        id: result.value.SubCategory.id,
        mutationData: {
          name: result.value.SubCategory.name,
        },
      })
    }

    const handleRemove = () => {
      deleteButtonState.value = true
      mutateRemove({ id: result.value.SubCategory.id })
    }

    // Warning Handlers
    onDoneUpdate((result) => {
      saveButtonState.value = false
      snackbar.text = `Sub Categoria Atualizado ${result.data}`
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
      snackbar.text = `Sub Categoria  Apagada ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace('/admin/sub-categories')
    })

    onErrorRemove((error) => {
      console.log(error)
      saveButtonState.value = false
      snackbar.text = error.message
      snackbar.color = 'red'
      snackbar.isOpen = true
    })

    return {
      result,
      snackbar,
      handleUpdate,
      handleRemove,
      saveButtonState,
      deleteButtonState,
    }
  },
})
</script>
