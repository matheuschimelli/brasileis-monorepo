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
      v-if="result && result.Law"
      update-button
      delete-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
    >
      <LawView v-model="result.Law" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import useEditItem from '@/hooks/useEditItem'

import EditItem from '@/components/Item/EditItem.vue'
import LawView from '@/components/Law/LawView.vue'
export default defineComponent({
  components: {
    EditItem,
    LawView,
  },
  setup() {
    const { route } = useContext()

    const {
      snackbar,
      updateMutation,
      removeMutation,
      saveButtonState,
      deleteButtonState,
      result,
    } = useEditItem({
      updateMutation: gql`
        mutation update($id: String!, $data: UpdateLawInput!) {
          updateLaw(id: $id, data: $data) {
            id
            title
          }
        }
      `,
      removeMutation: gql`
        mutation remove($id: String!) {
          removeLaw(id: $id)
        }
      `,
      getQuery: {
        query: gql`
          query($slug: String!) {
            Law(slug: $slug) {
              id
              title
              slug
              createdAt
              updatedAt
              htmlContent
              categories {
                id
              }
              subCategories {
                id
              }
            }
          }
        `,
        vars: { slug: route.value.params.id },
      },
    })

    const handleUpdate = () => {
      updateMutation({
        id: result.value.Law.id,
        data: {
          title: result.value.Law.title,
          description: result.value.Law.summary,
          categories: result.value.Law.categories.map((data: any) => data.id),
          subCategories: result.value.Law.subCategories.map(
            (data: any) => data.id
          ),
        },
      })
    }
    const handleRemove = () => {
      removeMutation({ id: result.value.Law.id })
    }

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
