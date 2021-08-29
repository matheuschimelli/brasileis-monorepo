<template>
  <v-select
    v-if="result && result.allCategoriesWithoutPagination"
    v-model="selectedCategories"
    :items="result.allCategoriesWithoutPagination"
    attach
    item-value="id"
    item-text="name"
    outlined
    chips
    label="Categorias"
    multiple
    small-chips
  ></v-select>
  <h3 v-else>Erro ao carregar Categorias</h3>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default defineComponent({
  props: {
    value: Array,
  },

  setup(props, { emit }) {
    const selectedCategories = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    const { result, error } = useQuery(
      gql`
        query {
          allCategoriesWithoutPagination {
            id
            name
          }
        }
      `
    )

    return {
      selectedCategories,
      result,
      error,
    }
  },
})
</script>
<style lang="scss" scoped>
textarea {
  font-size: 1.5em;
  width: 100%;
  position: relative;
  resize: none;
}
textarea:focus {
  outline: none;
}
</style>
