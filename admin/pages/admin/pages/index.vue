<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card outlined tile>
            <v-card-actions>
              <v-btn
                class="ma-2"
                tile
                outlined
                color="success"
                to="/admin/pages/new"
              >
                <v-icon left>mdi-pen-plus</v-icon> Nova Página
              </v-btn>
            </v-card-actions>
            <v-list>
              <v-subheader>Páginas Criadas</v-subheader>
              <v-list-item
                v-for="designation in weekdesignations"
                :key="designation._id"
                link
                two-line
                subheader
                :to="'/admin/designacoes/meio-de-semana/' + designation._id"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-pencil-circle-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <b>{{
                      formatedDate(designation.date)
                    }}</b></v-list-item-title
                  >
                  <v-list-item-subtitle
                    v-html="designation.content"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="designationModel" persistent max-width="600px">
      <v-card>
        <ErrorAlert v-show="alert.error" :message="alert.message" />

        <v-card-title>
          <span class="headline">Novo anúncio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="announcement.title"
                  label="Título"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <TextEditor v-model="announcement.content" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="designationModel = false"
            >Cancelar</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            :loading="loadingBtn"
            @click="create"
            >Salvar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import moment from 'moment'
import ErrorAlert from '@/components/shared/ErrorAlert'
import TextEditor from '@/components/Inputs/TextEditor'

moment.locale('pt-br')

export default {
  components: {
    TextEditor,
    ErrorAlert,
  },

  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      weekdesignations: null,
      weekenddesignations: null,
      designationModel: false,
      loadingBtn: false,
      announcement: {
        title: null,
        content: null,
      },
      alert: {
        message: null,
        error: false,
      },
    }
  },
  async created() {
    await this.fetchWeekDesignationsIndex()
    await this.fetchWeekEndDesignationsIndex()
    console.log(this.editorContent)
  },

  methods: {
    formatedDate(date) {
      console.log(date)
      return moment(date).format('LL')
    },
    async fetchWeekDesignationsIndex() {
      try {
        const { data } = await this.$axios.get('/weekdesignations')
        this.weekdesignations = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchWeekEndDesignationsIndex() {
      try {
        const { data } = await this.$axios.get('/weekenddesignations')
        this.weekenddesignations = data
      } catch (error) {
        console.log(error)
      }
    },
    async create() {
      this.loadingBtn = true
      try {
        await this.$axios.post('/announcements', {
          ...this.announcement,
        })
        this.loadingBtn = false
        this.designationModel = false
        this.alert.error = false
        await this.fetchIndex()
      } catch (error) {
        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
  },
}
</script>
<style lang="scss">
.customFab {
  margin-bottom: 50px !important;
}
</style>
