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
      v-if="result && result.Crawler"
      update-button
      delete-button
      run-now-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
      @runNow="handleRunCrawler"
    >
      <CrawlerView v-model="result.Crawler" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import { useMutation } from '@vue/apollo-composable'

import EditItem from '@/components/Item/EditItem.vue'
import CrawlerView from '@/components/Crawler/CrawlerView.vue'

import useEditItem from '@/hooks/useEditItem'

export default defineComponent({
  middleware: 'admin',
  components: {
    EditItem,
    CrawlerView,
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
          $mutationData: UpdateCrawlerInput!
        ) {
          updateCrawler(id: $id, data: $mutationData) {
            id
            urlsToVisit
            crawlerName
            baseUrl
            followOnlySameHost
            categories {
              id
              name
            }
            subCategories {
              id
              name
            }
            createdAt
            updatedAt
            htmlSelectors {
              id
              urlListEl
              titleEl
              alternativeTitleEl
              contentEl
              paginationEl
              nextPageEl
              previousPageEl
            }
            updateTime {
              id
              monday
              tuesday
              wednesday
              thursday
              friday
              saturday
              sunday
              updateMondayTime
              updateTuesdayTime
              updateWednesdayTime
              updateThursdayTime
              updateFridayTime
              updateSaturdayTime
              updateSundayTime
            }
            crawlerType {
              id
              name
              functionName
              description
              params
            }
          }
        }
      `,
      removeMutation: gql`
        mutation removeItem($id: ID!) {
          deleteCrawler(id: $id)
        }
      `,
      getQuery: {
        query: gql`
          query($id: String!) {
            Crawler(id: $id) {
              id
              urlsToVisit
              crawlerName
              baseUrl
              followOnlySameHost
              categories {
                id
                name
              }
              subCategories {
                id
                name
              }
              createdAt
              updatedAt
              htmlSelectors {
                urlListEl
                titleEl
                alternativeTitleEl
                contentEl
                paginationEl
                nextPageEl
                previousPageEl
              }
              updateTime {
                monday
                tuesday
                wednesday
                thursday
                friday
                saturday
                sunday
                updateMondayTime
                updateTuesdayTime
                updateWednesdayTime
                updateThursdayTime
                updateFridayTime
                updateSaturdayTime
                updateSundayTime
              }
              crawlerType {
                id
                name
                functionName
                description
                params
              }
            }
          }
        `,
        vars: { id: route.value.params.id },
      },
    })

    const handleUpdate = () => {
      saveButtonState.value = true
      updateMutation({
        id: result.value.Crawler.id,
        mutationData: {
          crawlerName: result.value.Crawler.crawlerName,
          followOnlySameHost: true,
          urlsToVisit: result.value.Crawler.urlsToVisit,
          baseUrl: result.value.Crawler.baseUrl,

          updateTime: {
            friday: result.value.Crawler.updateTime.friday,
            monday: result.value.Crawler.updateTime.monday,
            saturday: result.value.Crawler.updateTime.saturday,
            sunday: result.value.Crawler.updateTime.sunday,
            thursday: result.value.Crawler.updateTime.thursday,
            tuesday: result.value.Crawler.updateTime.tuesday,
            wednesday: result.value.Crawler.updateTime.wednesday,
            updateFridayTime: result.value.Crawler.updateTime.updateFridayTime,
            updateMondayTime: result.value.Crawler.updateTime.updateMondayTime,
            updateSaturdayTime:
              result.value.Crawler.updateTime.updateSaturdayTime,
            updateSundayTime: result.value.Crawler.updateTime.updateSundayTime,
            updateThursdayTime:
              result.value.Crawler.updateTime.updateThursdayTime,
            updateTuesdayTime:
              result.value.Crawler.updateTime.updateTuesdayTime,
            updateWednesdayTime:
              result.value.Crawler.updateTime.updateWednesdayTime,
          },
          htmlSelectors: {
            alternativeTitleEl:
              result.value.Crawler.htmlSelectors.alternativeTitleEl,
            contentEl: result.value.Crawler.htmlSelectors.contentEl,
            nextPageEl: result.value.Crawler.htmlSelectors.nextPageEl,
            paginationEl: result.value.Crawler.htmlSelectors.paginationEl,
            previousPageEl: result.value.Crawler.htmlSelectors.previousPageEl,
            titleEl: result.value.Crawler.htmlSelectors.titleEl,
            urlListEl: result.value.Crawler.htmlSelectors.urlListEl,
          },
          categories: result.value.Crawler.categories.map(
            (data: any) => data.id || data
          ),
          subCategories: result.value.Crawler.subCategories.map(
            (data: any) => data.id || data
          ),
          crawlerType: result.value.Crawler.crawlerType.id,
        },
      })
    }

    const handleRemove = () => {
      deleteButtonState.value = true
      removeMutation({ id: result.value.Crawler.id })
    }

    const {
      mutate: runCrawlerMutation,
      onDone: runCrawlerDone,
      onError: runCrawlerError,
    } = useMutation(gql`
      mutation($id: ID!) {
        runCrawler(id: $id)
      }
    `)
    const handleRunCrawler = () => {
      runCrawlerMutation({ id: route.value.params.id })
    }

    // Warning Handlers
    runCrawlerDone((result) => {
      saveButtonState.value = false
      snackbar.text = `Salvo com sucesso! ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
    })

    runCrawlerError((error) => {
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
      handleRunCrawler,
    }
  },
})
</script>
