<template>
  <v-app>
    <div>
      <v-btn
        v-show="$vuetify.breakpoint.mdAndUp"
        class="ma-2"
        tile
        outlined
        color="success"
        @click="create"
      >
        <v-icon left>mdi-pencil</v-icon> Salvar
      </v-btn>
    </div>
    <v-card tile outlined>
      <v-card-title>
        <v-text-field label="Título, nome da lei"></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="3" lg="3">
            <v-select
              v-model="law.category"
              :hint="`${select.state}, ${select.abbr}`"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Categoria principal"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
export default {
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      laws: null,
      loadingAnnouncementeButton: false,
      alert: {
        message: null,
        error: false,
      },
      law: {
        category: {},
      },
      categories: null,
      subCategories: null,
      lawType: null,
    }
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      try {
        const { data: categories } = await this.$axios.get('/categories')
        const { data: subCategories } = await this.$axios.get('/sub-categories')
        const { data: lawType } = await this.$axios.get('/lawType')
        this.categories = categories
        this.subCategories = subCategories
        this.lawType = lawType
      } catch (error) {}
    },
    create() {
      console.log('creating item')
    },
  },
}
</script>
<style lang="scss">
.customFab {
  margin-bottom: 50px !important;
}
</style>
