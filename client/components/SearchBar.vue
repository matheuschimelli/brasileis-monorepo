<template>
  <div>
    <v-autocomplete
      v-model="searchModel"
      :items="searchResults"
      :search-input.sync="searchTerm"
      dense
      flat
      hide-details
      rounded
      solo-inverted
      placeholder="Digite para pesquisar"
      item-text="title"
      item-value="title"
      full-width
      hide-no-data
      no-data-text="Nenhum resultado para o termo buscado"
      @keypress="searchApi"
    >
      <template v-slot:item="data">
        <v-card outlined :to="'/legislacao/' + data.item.slug">
          <v-card-title>{{ data.item.title }}</v-card-title>
          <v-card-text>{{ data.item.url }}</v-card-text>
        </v-card>
      </template>
    </v-autocomplete>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      searchModel: null,
    }
  },

  methods: {
    searchApi() {
      const self = this
      try {
        setTimeout(async () => {
          const { data } = await this.$axios.get(`/search?q=${this.searchTerm}`)
          self.searchResults = data.r.results.hits
        }, 5000)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
