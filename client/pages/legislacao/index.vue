<template>
  <div>
    <v-container>
      <span class="resultsInfo">Resultados: {{ resultsLenght }}</span>
    </v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9" lg="9">
        <v-container>
          <v-card
            v-for="law in laws"
            :key="law._id"
            outlined
            :to="'/legislacao/' + law.slug"
            class="p-bottom"
          >
            <v-card-title> {{ law.title }} </v-card-title>
            <v-card-text class="textResult">
              <p v-html="law.textContent"></p>
            </v-card-text>
          </v-card>
          <v-btn
            v-if="currentPage >= 2"
            link
            :to="'/legislacao?page=' + previousPage"
            color="primary"
            depressed
            >Anterior</v-btn
          >

          <v-btn
            link
            :to="'/legislacao?page=' + nextPage"
            color="primary"
            depressed
            >Próxima página</v-btn
          >
        </v-container>
      </v-col>
      <v-col cols="12" sm="12" md="3" lg="3">
        <v-container>
          <v-card outlined>
            <v-card-title>ads</v-card-title>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  watchQuery: ['page'],
  async asyncData({ query, $axios }) {
    const page = query.page || 1
    const nextPage = parseInt(page) + parseInt(1)
    const previousPage = parseInt(page) - parseInt(1)

    try {
      const { data: laws } = await $axios.get(`/laws?page=${page}`)

      return {
        laws: laws.laws,
        currentPage: page,
        nextPage,
        previousPage,
      }
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
      title: `Legislação Brasileis. `,
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.searchQuery} - Brasileis. `,
        },
      ],
    }
  },
}
</script>
<style scoped>
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
</style>
