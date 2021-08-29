<template>
  <EscritorioLayout>
    <v-container>
      <AlertError v-if="errorMsg" :message="errorMsg" />
      <DeleteModal
        :is-open="deleteModal"
        title="Deletar cliente"
        content="Se você deletar um cliente não poderá recuperá-lo depois. Essa ação não poderá ser desfeita."
        @onClose="deleteModal = false"
        @onConfirmDelete="deleteCliente"
      />
      <v-btn depressed color="success" :loading="updateLoading" @click="update">
        <v-icon left size="24">mdi-account-edit</v-icon>
        Atualizar
      </v-btn>
      <v-btn depressed color="red" dark @click="deleteModal = true">
        <v-icon left size="24">mdi-trash-can-outline</v-icon>
        Deletar
      </v-btn>
    </v-container>
    <v-container>
      <v-card v-if="cliente" outlined tile>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field v-model="cliente.nome" label="Nome" />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field v-model="cliente.cpf" label="CPF" />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field v-model="cliente.rg" label="RG" />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="cliente.tituloEleitor"
                label="Título de eleitor"
              />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="cliente.carteiraMotorista"
                label="Carteira de motorista"
              />
            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field v-model="cliente.endereco" label="Endereço" />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="cliente.endereco2"
                label="Endereço Secundário"
              />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3">
              <v-text-field v-model="cliente.telefone" label="Telefone" />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3">
              <v-text-field
                v-model="cliente.telefone2"
                label="Telefone Secundário"
              />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3">
              <v-text-field v-model="cliente.email" label="Email" />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3">
              <v-text-field v-model="cliente.email2" label="Email Secundário" />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3">
              <v-text-field
                v-model="cliente.estadoCivil"
                label="Estado Civil"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card v-else outlined tile>
        <v-card-title>Você ainda não adicionou nenhum cliente</v-card-title>
      </v-card>
    </v-container>
  </EscritorioLayout>
</template>
<script>
import EscritorioLayout from '../../../components/EscritorioVirtual/EscritorioLayout' // '~/components/EscritorioVirtual/EscritorioLayout'
import DeleteModal from '../../../components/DeleteModal'

export default {
  middleware: ['auth', 'hasEscritorio'],
  fetchOnServer: false,
  loading: false,
  layout: 'escritorio',
  components: {
    EscritorioLayout,

    DeleteModal,
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/escritorio/clientes/${this.$route.params.id}`
      )
      console.log(data)
      this.cliente = data.cliente
    } catch (error) {
      console.log(error)
      this.error = error.response.data.message
    }
  },
  data() {
    return {
      cliente: {},
      errorMsg: null,
      deleteModal: false,
      updateLoading: false,
    }
  },

  methods: {
    async update(doc) {
      this.updateLoading = true
      try {
        await this.$axios.put(`/escritorio/clientes/${this.$route.params.id}`, {
          content: doc,
        })
        this.updateLoading = false
      } catch (error) {
        console.log(error)
        this.updateLoading = false

        this.errorMsg =
          error.response.data.message ||
          'Não foi possível salvar as alterações. Tente mais tarde'
      }
    },
    async deleteCliente() {
      try {
        await this.$axios.delete(
          `/escritorio/clientes/${this.$route.params.id}`
        )
        return this.$router.push('/escritorio/clientes')
      } catch (error) {
        console.log(error)
        this.errorMsg =
          error.response.data.message ||
          'Não foi possível deletar o cliente. Tente mais tarde'
      }
    },
  },
  head() {
    return {
      title: this.cliente.nome,
    }
  },
}
</script>
