<template>
  <v-dialog v-model="modal" transition="dialog-top-transition" max-width="475">
    <v-card max-width="475" class="mx-auto">
      <v-toolbar color="white">
        <v-toolbar-title>Configurações do documento</v-toolbar-title
        ><v-spacer></v-spacer>
        <v-btn text @click="modal = false">Concluir</v-btn>
      </v-toolbar>

      <v-list two-line subheader>
        <v-subheader>Geral</v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="documentData.titulo"
              outlined
              label="Título da Petição"
              prepend-inner-icon="mdi-file-edit-outline"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="documentData.slug"
              dense
              hide-details
              color="#b82f00"
              filled
              disabled
              label="Id único compartilhável"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-btn
                  depressed
                  color="primary"
                  block
                  :loading="docxLoading"
                  disabled
                >
                  <v-icon left>mdi-file-word</v-icon>
                  Gerar DOCX
                </v-btn></v-col
              >
              <v-col cols="12" sm="12" md="6" lg="6">
                <v-btn
                  depressed
                  color="#F40F02"
                  dark
                  block
                  :loading="pdfLoading"
                  disabled
                >
                  <v-icon left>mdi-file-pdf</v-icon>
                  Gerar PDF
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader three-line flat>
        <v-subheader>Permissões e acesso</v-subheader>

        <v-list-item-group v-model="documentData" multiple>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  v-model="documentData.private"
                  :input-value="active"
                  color="success"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Petição privada</v-list-item-title>
                <v-list-item-subtitle
                  >Somente você pode ler e editar
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item @click="emitDelete">
            <v-list-item-content>
              <v-list-item-title>
                <v-btn color="error" block depressed> Deletar </v-btn>
              </v-list-item-title>

              <v-list-item-subtitle>
                Apaga permanentemente a petição e dados relacionados.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
  },
  data() {
    return {
      documentData: {},
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
    documentData(val) {
      this.$emit('input', val)
    },
    document(val) {
      this.documentData = val
    },
  },
  methods: {
    formatDate(datetime) {
      return dayjs(datetime).format('DD/MM/YYYY')
    },
    emitDelete() {
      this.$emit('onDeleteDocument')
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
