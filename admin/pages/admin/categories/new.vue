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
      save-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      @save="handleSave"
    >
      <CategoryView v-model="newCategory" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import EditItem from '@/components/Item/EditItem.vue'
import CategoryView from '@/components/Category/CategoryView.vue'
export default defineComponent({
  components: {
    EditItem,
    CategoryView,
  },
  setup() {
    const saveButtonState = ref<boolean>(false)
    const snackbar = reactive({
      isOpen: false,
      text: '',
      color: '',
    })
    const newCategory = reactive({
      name: '',
      featured: false,
      description: '',
    })

    // mutations
    const { mutate, onDone, onError } = useMutation(
      gql`
        mutation create($data: CreateCategoryInput!) {
          createCategory(data: $data) {
            id
            slug
          }
        }
      `
    )

    // Functions
    const handleSave = () => {
      saveButtonState.value = true
      mutate({
        data: newCategory,
      })
    }

    // Warning Handlers
    onDone((result) => {
      saveButtonState.value = false
      snackbar.text = `Categoria Criado ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace(
        `/admin/categories/${result.data.createCategory.slug}`
      )
    })

    onError((error) => {
      console.log(error)
      saveButtonState.value = false
      snackbar.text = error.message
      snackbar.color = 'red'
      snackbar.isOpen = true
    })

    return {
      snackbar,
      handleSave,
      saveButtonState,
      newCategory,
    }
  },
})
</script>
