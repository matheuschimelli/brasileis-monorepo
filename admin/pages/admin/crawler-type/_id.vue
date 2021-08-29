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
      v-if="result && result.CrawlerType"
      update-button
      delete-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
    >
      <CrawlerTypeView v-model="result.CrawlerType" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import EditItem from '@/components/Item/EditItem.vue'
import CrawlerTypeView from '@/components/CrawlerType/CrawlerTypeView.vue'

import useEditItem from '@/hooks/useEditItem'

export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    CrawlerTypeView,
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
        mutation updateArticle(
          $id: String!
          $mutationData: UpdateCrawlerTypeInput!
        ) {
          updateCrawlerType(id: $id, data: $mutationData) {
            id
          }
        }
      `,
      removeMutation: gql`
        mutation removeItem($id: ID!) {
          deleteCrawlerType(id: $id)
        }
      `,
      getQuery: {
        query: gql`
          query($id: String!) {
            CrawlerType(id: $id) {
              id
              name
              functionName
              description
              params
            }
          }
        `,
        vars: { id: route.value.params.id },
      },
    })

    const handleUpdate = () => {
      saveButtonState.value = true
      updateMutation({
        id: result.value.CrawlerType.id,
        mutationData: {
          name: result.value.CrawlerType.name,
          description: result.value.CrawlerType.description,
          functionName: result.value.CrawlerType.functionName,
          params: result.value.CrawlerType.params,
        },
      })
    }

    const handleRemove = () => {
      deleteButtonState.value = true
      removeMutation({ id: result.value.CrawlerType.id })
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
