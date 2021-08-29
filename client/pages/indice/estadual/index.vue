<template>
  <div>
    <v-card tile outlined>
      <v-card-title>Índice Legislação Estadual</v-card-title>
    </v-card>
    <div>
      <v-row>
        <v-col v-for="i in 27" :key="i" cols="12" sm="3" md="2" lg="2">
          <v-card tile outlined>
            <v-card-title>
              {{ i }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  watchQuery: ['q'],
  async asyncData({ query, $axios }) {
    try {
      const { data } = await $axios.get(`/categories`)

      return { categories: data, indice: [{ name: 'Legislação Estadual' }] }
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
