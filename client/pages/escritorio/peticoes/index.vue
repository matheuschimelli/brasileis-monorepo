<template>
  <!-- <EscritorioLayout>
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
  </EscritorioLayout> -->

  <AllPeticoes
    v-if="result && result.allUserPeticoes && result.allUserPeticoesCount"
    page-name="Petições"
    create-new-link="/escritorio/peticoes/new"
    item-id="id"
    item-title="titulo"
    :items="result.allUserPeticoes"
    view-item-url="/escritorio/peticoes"
    :items-count="result.allUserPeticoesCount"
    :loading-btn="createButtonState"
    @onLoadNextPage="loadNextPage"
    @save="handleCreate"
  />
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import dayjs from 'dayjs'
import gql from 'graphql-tag'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

// import EscritorioLayout from '@/components/EscritorioVirtual/EscritorioLayout.vue'
// import AlertError from '@/components/AlertError.vue'
import AllPeticoes from '@/components/EscritorioVirtual/Peticao/AllPeticoes.vue'

import { useQuery, useMutation } from '@vue/apollo-composable/dist'

// import useQueryAllItems from '@/hooks/useQueryAllItems'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default defineComponent({
  middleware: ['auth', 'hasEscritorio'],
  layout: 'escritorio',
  components: {
    // EscritorioLayout,
    // AlertError,
    AllPeticoes,
  },
  setup() {
    const currentPage = ref(1)
    const pageCount = ref(0)
    const createButtonState = ref<boolean>(false)

    const snackbar = reactive({
      isOpen: false,
      text: '',
      color: '',
    })

    const { result } = useQuery(
      gql`
        query($page: Int!) {
          allUserPeticoesCount

          allUserPeticoes(page: $page) {
            id
            titulo
            owner {
              name
            }
          }
        }
      `,
      {
        page: currentPage,
      }
    )

    const loadNextPage = (data: any) => (currentPage.value = data)

    const {
      mutate: createPeticaoMutation,
      onDone: createPeticaoDone,
      onError: createPeticaoError,
    } = useMutation(gql`
      mutation {
        createPeticao {
          id
        }
      }
    `)

    const handleCreate = () => createPeticaoMutation()

    createPeticaoDone((result) => {
      createButtonState.value = false
      snackbar.text = `Salvo com sucesso! ${result.data}`
      snackbar.color = 'success'
      snackbar.isOpen = true
      return window.location.replace(`peticoes/${result.data.createPeticao.id}`)
    })

    createPeticaoError((error) => {
      console.log(error)
      createButtonState.value = false
      snackbar.text = error.message
      snackbar.color = 'red'
      snackbar.isOpen = true
    })

    return {
      result,
      currentPage,
      pageCount,
      loadNextPage,
      handleCreate,
      createButtonState,
    }
  },
})
</script>

<!--
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
      const { data } = await this.$axios.get('/escritorio/peticoes')
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
        const { data } = await this.$axios.post(
          '/escritorio/peticoes/generate/blank'
        )
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
-->
