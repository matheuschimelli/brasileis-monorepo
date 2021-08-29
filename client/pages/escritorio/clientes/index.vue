<template>
  <EscritorioLayout>
    <v-container>
      <AlertError v-if="errorAlert" :message="errorAlert" />
      <NewClienteModal
        v-model="newCliente"
        :is-open="novoClienteModal"
        :loading="loadingNewClientModal"
        @onSave="onSaveNewCliente"
      />
      <v-btn depressed color="primary" @click="novoClienteModal = true">
        <v-icon left size="24">mdi-account-multiple-plus</v-icon>
        Adicionar novo Cliente
      </v-btn>
    </v-container>
    <v-container>
      <v-list
        v-if="clientes && clientes.length !== 0"
        subheader
        rounded
        outlined
      >
        <v-subheader inset>Clientes adicionados por você </v-subheader>

        <v-list-item
          v-for="cliente in clientes"
          :key="cliente.id"
          :to="'/escritorio/clientes/' + cliente.id"
          color="primary"
        >
          <v-list-item-avatar>
            <v-icon color="blue" dark>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="cliente.nome"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card v-else outlined tile>
        <v-card-title>Você ainda não adicionou nenhum cliente</v-card-title>
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

import EscritorioLayout from '../../../components/EscritorioVirtual/EscritorioLayout' // '~/components/EscritorioVirtual/EscritorioLayout'
import AlertError from '../../../components/AlertError'
import NewClienteModal from '../../../components/EscritorioVirtual/Cliente/NewClienteModal'

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
    NewClienteModal,
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get('/escritorio/clientes')
      console.log(data)
      this.clientes = data.clientes
    } catch (error) {
      console.log(error)
      this.error = error.response.data.message
    }
  },
  data() {
    return {
      errorAlert: null,
      clientes: null,
      novoClienteModal: false,
      newCliente: {},
      loadingNewClientModal: false,
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
    async onSaveNewCliente() {
      this.error = null
      try {
        this.loadingNewClientModal = true
        console.log('working')
        console.log(this.newCliente)

        const { data } = await this.$axios.post('/escritorio/clientes', {
          ...this.newCliente,
        })
        this.clientes
          ? this.clientes.unshift(data.cliente)
          : (this.clientes = [{ ...data.cliente }])
        this.loadingNewClientModal = false
        this.novoClienteModal = false
      } catch (error) {
        console.log(error)
        this.loadingNewClientModal = false
        this.novoClienteModal = false
        this.errorAlert =
          error.response.data.message ||
          'Não foi possível salvar. Tente mais tarde'
      }
    },
  },
}
</script>
