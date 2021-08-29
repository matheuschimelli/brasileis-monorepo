<template>
  <v-dialog v-model="modal" transition="dialog-top-transition" max-width="475">
    <v-card max-width="475" class="mx-auto">
      <v-toolbar color="white">
        <v-toolbar-title>Adicionar um novo Cliente</v-toolbar-title
        ><v-spacer></v-spacer>
        <v-btn text :loading="loading" @click="emitSave">Salvar</v-btn>
      </v-toolbar>

      <v-list two-line subheader>
        <v-subheader>Dados Gerais</v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.nome"
              label="Nome completo do cliente"
              prepend-inner-icon="mdi-contacts"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.endereco"
              label="Endereço"
              prepend-inner-icon="mdi-home"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.endereco2"
              label="Endereço Secundário"
              prepend-inner-icon="mdi-home"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.email"
              label="Email"
              prepend-inner-icon="mdi-email"
              type="email"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.email2"
              label="Email Secundário"
              prepend-inner-icon="mdi-email"
              type="email"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.telefone"
              label="Telefone"
              prepend-inner-icon="mdi-phone"
              type="phone"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.telefone2"
              label="Telefone Secundário"
              prepend-inner-icon="mdi-phone"
              type="phone"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list two-line subheader>
        <v-subheader>Dados pessoais de identificação</v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.cpf"
              label="CPF"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.rg"
              label="RG"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.tituloEleitor"
              label="Título de Eleitor"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.carteiraMotorista"
              label="Carteira de Motorista"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="cliente.estadoCivil"
              label="Estado Civil"
              :loading="loading"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
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
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    document: {
      type: Object,
      default: Object,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cliente: {},
      docxLoading: false,
      pdfLoading: false,
    }
  },
  computed: {
    modal: {
      get() {
        return this.isOpen
      },
      set() {
        this.$emit('closeModal')
      },
    },
  },

  watch: {
    cliente(val) {
      this.$emit('input', val)
    },
    document(val) {
      this.cliente = val
    },
  },
  methods: {
    formatDate(datetime) {
      return dayjs(datetime).format('DD/MM/YYYY')
    },
    emitSave() {
      this.$emit('onSave')
    },
    async generateDocx() {
      this.docxLoading = true
      try {
        await this.$axios.post(
          `/peticoes/download/docx/${this.$route.params.id}`
        )
        this.docxLoading = false
      } catch (error) {
        this.docxLoading = false

        console.log(error)
      }
    },
  },
}
</script>
