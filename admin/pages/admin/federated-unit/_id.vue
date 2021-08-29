<template>
  <v-app>
    <SnackBar
      :color="snackbar.color"
      :message="snackbar.message"
      :showsnack="snackbar.show"
    />
    <ErrorAlert v-show="alert.error" :message="alert.message" />
    <div>
      <v-btn
        class="ma-2"
        tile
        outlined
        color="success"
        :loading="loadingBtn"
        @click="update"
      >
        <v-icon left>mdi-content-save-edit-outline</v-icon> Atualizar estado
      </v-btn>
      <v-btn
        class="ma-2"
        tile
        outlined
        color="red"
        :loading="loadingBtn"
        @click="remove"
      >
        <v-icon left>mdi-content-save-edit-outline</v-icon> Apagar estado
      </v-btn>
    </div>
    <div>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="6">
          <v-text-field
            v-model="federatedUnit.name"
            placeholder="Nome Categoria"
            label="Nome Categoria"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6">
          <v-checkbox
            v-model="federatedUnit.featured"
            label="Colocar em destaque"
          />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import moment from 'moment'
import ErrorAlert from '@/components/shared/ErrorAlert'
import SnackBar from '@/components/shared/SnackBar'
moment.locale('pt-br')
export default {
  components: {
    ErrorAlert,
    SnackBar,
  },
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      announcementModel: false,
      loadingBtn: false,
      alert: {
        message: null,
        error: false,
      },
      snackbar: {
        show: false,
        color: 'success',
        message: '',
      },
      fetchedCategories: null,
      fetchedSubCategories: null,
      federatedUnit: {},
    }
  },

  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      try {
        const { data: federatedUnit } = await this.$axios.get(
          `/federated-units/${this.$route.params.id}`
        )
        this.federatedUnit = federatedUnit
      } catch (error) {
        console.log(error)
      }
    },
    async update() {
      this.alert.error = false
      this.loadingBtn = true
      console.log(this.article)

      try {
        await this.$axios.put(`/federated-units/${this.$route.params.id}`, {
          ...this.federatedUnit,
        })

        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Salvo'
        this.loadingBtn = false
      } catch (error) {
        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
    async remove() {
      this.alert.error = false
      this.loadingBtn = true
      console.log(this.article)

      try {
        await this.$axios.delete(`/federated-units/${this.$route.params.id}`)

        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Categoria removida'
        this.loadingBtn = false
        return this.$router.push(`/admin/federated-unit/`)
      } catch (error) {
        this.loadingBtn = false
        this.alert.error = true
        this.alert.message = error.response.data.message
      }
    },
  },
}
</script>
<style scoped>
.article-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
