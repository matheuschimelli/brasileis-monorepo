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
        v-show="$vuetify.breakpoint.mdAndUp"
        class="ma-2"
        tile
        outlined
        color="success"
        @click="create"
      >
        <v-icon left>mdi-pencil</v-icon> Salvar
      </v-btn>
    </div>
    <v-card tile outlined>
      <v-card-title> Adicionar novo estado </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="3" lg="3">
            <v-text-field v-model="federatedUnit.name" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import ErrorAlert from '@/components/shared/ErrorAlert'
import SnackBar from '@/components/shared/SnackBar'
export default {
  layout: 'admin',
  middleware: 'admin',
  components: {
    ErrorAlert,
    SnackBar,
  },
  data() {
    return {
      laws: null,
      loadingAnnouncementeButton: false,
      alert: {
        message: null,
        error: false,
      },
      snackbar: {
        show: false,
        color: 'success',
        message: '',
      },
      federatedUnit: {},
    }
  },

  methods: {
    async create() {
      this.alert.error = false
      this.loadingBtn = true

      try {
        const { data } = await this.$axios.post(`/federated-units`, {
          ...this.federatedUnit,
        })

        this.snackbar.show = true
        this.snackbar.color = 'success'
        this.snackbar.message = 'Salvo'
        this.loadingBtn = false
        if (data.id) {
          return this.$router.push(`/admin/federated-unit/${data.id}`)
        }
      } catch (error) {
        console.log(error)
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
.
