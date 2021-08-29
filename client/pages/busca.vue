<template>
  <div>
    <v-container>
      <span class="resultsInfo">Resultados: {{ resultsLenght }}</span>
    </v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9" lg="9">
        <v-container v-if="notFoundError">
          <v-card outlined class="p-bottom">
            <v-card-title>Nada encontrado</v-card-title>

            <v-card-text class="textResult">
              <p>
                Não foi possível encontrar nenhum resultado para a pesquisa
                realizada. Verifique e tente novamente.
              </p>
            </v-card-text>
          </v-card>
        </v-container>
        <v-container v-if="!notFoundError">
          <v-card
            v-for="result of searchResults"
            :key="result._source.docId"
            :to="'/legislacao/' + result._source.slug"
            outlined
            class="p-bottom"
          >
            <v-card-title>{{ result._source.title }}</v-card-title>
            <div class="categories">
              <v-chip
                v-for="category of result._source.categories"
                :key="category"
                :to="'/c/' + category"
                outlined
                color="#b82f00"
                small
                class="ma-2"
                label
                >{{ category }}
              </v-chip>
            </div>

            <v-card-text v-if="result.highlight" class="textResult">
              <p v-html="result.highlight.textContent[0]"></p>
            </v-card-text>
          </v-card>
          <div class="pagination">
            <v-btn
              v-if="currentPage >= 2"
              link
              :to="routePath + previousPage"
              color="#b82f00"
              outlined
            >
              Anterior
              <v-icon right>mdi-arrow-left-bold-circle-outline</v-icon></v-btn
            >

            <v-btn link :to="routePath + nextPage" color="#b82f00" outlined
              >Próxima página
              <v-icon right>mdi-arrow-right-circle-outline</v-icon></v-btn
            >
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

dayjs.locale({
  ...pt,
})

export default {
  watchQuery: ['q', 'page', 'categories', 'subcategories'],
  async asyncData({ query, $axios, route }) {
    const page = query.page || 1
    const nextPage = parseInt(page) + parseInt(1)
    const previousPage = parseInt(page) - parseInt(1)
    // const categories = query.categories
    // const subCategories = query.subCategories
    // const searchTerm = query.q
    const fixedRoute = route.fullPath.replace('/busca', '/search')
    try {
      const { data } = await $axios.get(fixedRoute)
      if (!data.results) {
        return {
          notFoundError: true,
          searchQuery: 'Nada encontrado',
          resultsLenght: 0,
        }
      }
      if (data.total === 0) {
        return {
          notFoundError: true,
          searchQuery: 'Nada encontrado',
          resultsLenght: 0,
        }
      }
      return {
        notFoundError: false,
        searchQuery: query.q,
        searchResults: data.results,
        resultsLenght: data.total,
        currentPage: page,
        nextPage,
        previousPage,
      }
    } catch (error) {
      console.log(error)
      return {
        notFoundError: true,
        searchQuery: 'Nada encontrado',
        resultsLenght: 0,
      }
    }
  },
  computed: {
    routePath() {
      if (!this.$route.fullPath.includes('&page=')) {
        return `${this.$route.fullPath}&page=`
      }
      return this.$route.fullPath.replace(/(&page=\d+)/, '&page=')
    },
  },
  methods: {
    formatDate(datetime) {
      return dayjs(datetime).format('l LT')
    },
    fixHightligh(str) {
      const htmlString = str
      const plainText = htmlString.replace(/<[^>]+>/g, '')
      return plainText
    },
  },
  head() {
    return {
      title: `${this.searchQuery}  | Pesquisa Brasileis `,
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
<style>
.resultsInfo {
  color: #8e8e8e;
  font-size: 14px;
}
.p-bottom {
  margin-bottom: 25px;
}
mark {
  font-weight: 600 !important;
}
.pagination {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
