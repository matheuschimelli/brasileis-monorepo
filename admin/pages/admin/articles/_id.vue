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
      v-if="result && result.Article"
      update-button
      delete-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
    >
      <ArticleView v-model="result.Article" />
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
import ArticleView from '@/components/Article/ArticleView.vue'
export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    ArticleView,
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
          Article(slug: $slug) {
            id
            title
            slug
            summary
            content
            createdAt
            updatedAt
            categories {
              id
            }
            subCategories {
              id
            }
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
          $articleData: CreateArticleInput!
        ) {
          updateArticle(id: $id, data: $articleData) {
            id
            title
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
        mutation removeArticle($id: String!) {
          removeArticle(id: $id)
        }
      `
    )

    // Functions

    const handleUpdate = () => {
      saveButtonState.value = true
      mutateUpdate({
        id: result.value.Article.id,
        articleData: {
          title: result.value.Article.title,
          description: result.value.Article.summary,
          content: result.value.Article.content,
          featured: result.value.Article.featured,
          summary: result.value.Article.summary,
          categories: result.value.Article.categories.map(
            (data: any) => data.id
          ),
          subCategories: result.value.Article.subCategories.map(
            (data: any) => data.id
          ),
        },
      })
    }

    const handleRemove = () => {
      deleteButtonState.value = true
      mutateRemove({ id: result.value.Article.id })
    }

    // Warning Handlers
    onDoneUpdate((result) => {
      saveButtonState.value = false
      snackbar.text = `Artigo Atualizado ${result.data}`
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
      snackbar.text = `Artigo Apagado ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace('/admin/articles')
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
