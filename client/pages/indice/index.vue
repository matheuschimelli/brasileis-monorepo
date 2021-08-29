<template>
  <div>
    <v-card tile outlined>
      <v-card-title>Índice legislativo</v-card-title>
      <v-card-subtitle>
        Procure leis artigos e decretos utilizando nosso índice legislativo
      </v-card-subtitle>
    </v-card>
    <div>
      <template>
        <v-card max-width="600" class="mx-auto mt-16" tile outlined>
          <v-list subheader>
            <v-list-item
              v-for="item in index"
              :key="item.id"
              :to="'/indice/' + item.slug"
            >
              <v-list-item-avatar tile>
                <v-icon class="grey lighten-1" dark>
                  mdi-book-open-page-variant
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">
                    mdi-arrow-right-drop-circle-outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  watchQuery: ['q'],
  async asyncData({ query, $axios }) {
    try {
      const { data } = await $axios.get(`/category-pages/`)

      return { index: data }
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      resultsLenght: '10',
    }
  },
  head() {
    return {
      title: 'Índice legislativo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Procure leis, decretos e jurisprudências utilizando o índice legislativo Brasileis',
        },
      ],
    }
  },
}
</script>
<style>
.resultsInfo {
  color: #8e8e8e;
  font-size: 14px;
}
.p-bottom {
  margin-bottom: 25px;
}
em {
  color: #b82f00 !important;
  font-weight: 600 !important;
}
h1 {
  text-align: center;
}
</style>
