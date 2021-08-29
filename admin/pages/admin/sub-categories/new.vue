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
      <SubCategoryView v-model="newSubCategory" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import EditItem from '@/components/Item/EditItem.vue'
import SubCategoryView from '@/components/SubCategory/SubCategoryView.vue'

export default defineComponent({
  components: {
    EditItem,
    SubCategoryView,
  },
  setup() {
    const saveButtonState = ref<boolean>(false)
    const snackbar = reactive({
      isOpen: false,
      text: '',
      color: '',
    })
    const newSubCategory = reactive({
      name: '',
    })

    // mutations
    const { mutate, onDone, onError } = useMutation(
      gql`
        mutation create($data: CreateSubCategoryInput!) {
          createSubCategory(data: $data) {
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
        data: newSubCategory,
      })
    }

    // Warning Handlers
    onDone((result) => {
      saveButtonState.value = false
      snackbar.text = `Sub Categoria Criado ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace(
        `/admin/sub-categories/${result.data.createSubCategory.slug}`
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
      newSubCategory,
    }
  },
})
</script>
