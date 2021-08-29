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
      :save-button-loading="saveButtonState"
      @save="handleSave"
    >
      <CrawlerTypeView v-model="newCrawlerType" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import EditItem from '@/components/Item/EditItem.vue'
import CrawlerTypeView from '@/components/CrawlerType/CrawlerTypeView.vue'

import useCreateItem from '@/hooks/useCreateItem'

export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    CrawlerTypeView,
  },
  setup() {
    const newCrawlerType = reactive({
      name: '',
      description: '',
      functionName: '',
      params: '',
    })
    const { snackbar, updateMutation, saveButtonState } = useCreateItem(
      {
        updateMutation: gql`
          mutation updateArticle($mutationData: CreateCrawlerTypeInput!) {
            createCrawlerType(data: $mutationData) {
              id
            }
          }
        `,
      },
      '/admin/crawler-type',
      'createCrawlerType',
      'id'
    )

    const handleSave = () => {
      saveButtonState.value = true
      updateMutation({
        mutationData: {
          ...newCrawlerType,
        },
      })
    }

    return {
      snackbar,
      handleSave,
      saveButtonState,
      newCrawlerType,
    }
  },
})
</script>
