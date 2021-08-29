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
      @save="handleCreate"
    >
      <CrawlerView v-model="newCrawler" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import EditItem from '@/components/Item/EditItem.vue'
import CrawlerView from '@/components/Crawler/CrawlerView.vue'

import useCreateItem from '@/hooks/useCreateItem'

export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    CrawlerView,
  },
  setup() {
    const newCrawler = reactive({
      crawlerName: '',
      followOnlySameHost: true,
      urlsToVisit: [],
      baseUrl: '',

      updateTime: {
        friday: false,
        monday: false,
        saturday: false,
        sunday: false,
        thursday: false,
        tuesday: false,
        wednesday: false,
        updateFridayTime: null,
        updateMondayTime: null,
        updateSaturdayTime: null,
        updateSundayTime: null,
        updateThursdayTime: null,
        updateTuesdayTime: null,
        updateWednesdayTime: null,
      },
      htmlSelectors: {
        alternativeTitleEl: 'title',
        contentEl: 'body',
        nextPageEl: null,
        paginationEl: null,
        previousPageEl: null,
        titleEl: 'title',
        urlListEl: 'body',
      },
      categories: [],
      subCategories: [],
      crawlerType: '',
    })

    const { snackbar, updateMutation, saveButtonState } = useCreateItem(
      {
        updateMutation: gql`
          mutation updateArticle($mutationData: CreateCrawlerInput!) {
            createCrawler(data: $mutationData) {
              id
              crawlerName
            }
          }
        `,
      },
      '/admin/crawler',
      'createCrawler',
      'id'
    )

    const handleCreate = () => {
      saveButtonState.value = true
      updateMutation({ mutationData: { ...newCrawler } })
    }

    return {
      snackbar,
      handleCreate,
      saveButtonState,
      newCrawler,
    }
  },
})
</script>
