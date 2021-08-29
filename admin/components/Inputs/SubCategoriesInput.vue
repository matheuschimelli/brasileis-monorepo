<template>
  <v-select
    v-if="result && result.allSubCategoriesWithoutPagination"
    v-model="selectedSubCategories"
    :items="result.allSubCategoriesWithoutPagination"
    attach
    item-value="id"
    item-text="name"
    outlined
    chips
    label="Sub Categorias"
    multiple
    small-chips
  ></v-select>
  <h3 v-else>Erro ao carregar SubCategorias</h3>
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
    const selectedSubCategories = computed({
      get: () => props.value,
      set: (value) => {
        console.log(value)
        emit('input', value)
      },
    })

    const { result, error } = useQuery(
      gql`
        query {
          allSubCategoriesWithoutPagination {
            id
            name
          }
        }
      `
    )

    return {
      selectedSubCategories,
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
