<template>
  <v-select
    v-if="result && result.allCrawlerTypes"
    v-model="selectedCrawlerTypes"
    :items="result.allCrawlerTypes"
    attach
    item-value="id"
    item-text="name"
    outlined
    label="Tipo do Crawler"
  ></v-select>
  <h3 v-else>Erro ao carregar Tipos de Crawlers</h3>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default defineComponent({
  props: {
    value: String,
  },

  setup(props, { emit }) {
    const selectedCrawlerTypes = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    const { result, error } = useQuery(
      gql`
        query {
          allCrawlerTypes {
            id
            name
          }
        }
      `
    )

    return {
      selectedCrawlerTypes,
      result,
      error,
    }
  },
})
</script>
