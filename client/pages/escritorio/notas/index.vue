<template>
  <EscritorioLayout>
    <v-container>
      <AlertError v-if="error" />
      <v-menu offset-y close-on-click>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="primary" v-bind="attrs" v-on="on">
            <v-icon left size="24">mdi-file-plus-outline</v-icon>
            Nova petição
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="generateNewPeticao">
            <v-list-item-title>Em branco</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
    <v-container>
      <v-list
        v-if="peticoes && peticoes.length !== 0"
        subheader
        two-line
        rounded
        outlined
      >
        <v-subheader inset
          >Petições criadas por você no seu escritório virtual
        </v-subheader>

        <v-list-item
          v-for="peticao in peticoes"
          :key="peticao.id"
          :to="'/escritorio/peticoes/' + peticao.id"
          color="primary"
        >
          <v-list-item-avatar>
            <v-icon color="blue" dark>mdi-file-document-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="peticao.titulo"></v-list-item-title>

            <v-list-item-subtitle
              v-text="lastTimeUpdated(peticao.updatedAt)"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card v-else outlined tile>
        <v-card-title>Você ainda não criou nenhuma petição.</v-card-title>
      </v-card>
    </v-container>
  </EscritorioLayout>
</template>
<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import EscritorioLayout from '../../../components/EscritorioVirtual/EscritorioLayout'
import AlertError from '../../../components/AlertError'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

dayjs.locale({
  ...pt,
})

export default {
  middleware: ['auth', 'hasEscritorio'],
  layout: 'escritorio',
  components: {
    EscritorioLayout,
    AlertError,
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get('/peticoes/escritorio')
      console.log(data)
      this.peticoes = data.peticoes
    } catch (error) {
      console.log(error)
      this.error = error.response.data.message
    }
  },
  data() {
    return {
      error: null,
      peticoes: null,
    }
  },
  methods: {
    async generateNewPeticao() {
      try {
        const { data } = await this.$axios.post('/peticoes/generate/blank')
        return this.$router.push(`/escritorio/peticoes/${data.peticao}`)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.message
      }
    },
    lastTimeUpdated(datetime) {
      return dayjs(datetime).startOf('hour').fromNow()
    },
  },
}
</script>
