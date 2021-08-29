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
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleSave"
    >
      <ArticleView v-model="newArticle" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'
import EditItem from '@/components/Item/EditItem.vue'
import ArticleView from '@/components/Article/ArticleView.vue'
export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    ArticleView,
  },
  setup() {
    const saveButtonState = ref<boolean>(false)
    const snackbar = reactive({
      isOpen: false,
      text: '',
      color: '',
    })
    const newArticle = reactive({
      title: '',
      description: 'Descrição',
      content: '',
      summary: 'Breve Resumo',
      categories: [],
      subCategories: [],
    })

    // mutations
    const { mutate, onDone, onError } = useMutation(
      gql`
        mutation createArticle($data: CreateArticleInput!) {
          createArticle(data: $data) {
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
        data: newArticle,
      })
    }

    // Warning Handlers
    onDone((result) => {
      saveButtonState.value = false
      snackbar.text = `Artigo Criado ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace(
        `/admin/articles/${result.data.createArticle.slug}`
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
      newArticle,
    }
  },
})
</script>
