<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="6" lg="6">
      <AlertError v-if="alertError" :message="alertError" />

      <v-card outlined tile>
        <v-card-title>Escritório virtual Brasileis</v-card-title>
        <v-card-text>
          <novoEscritorio
            :is-loading="loadingComponent"
            @create="createOffice"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import novoEscritorio from '../../components/EscritorioVirtual/Escritorio/NovoEscritorio'
import AlertError from '../../components/AlertError'

export default {
  middleware: ['auth', 'dontHasEscritorio'],
  components: {
    novoEscritorio,
    AlertError,
  },
  data() {
    return {
      escritorio: {},
      loadingComponent: false,
      alertError: null,
    }
  },
  methods: {
    async createOffice(escritorioData) {
      this.loadingComponent = true
      this.alertError = null

      try {
        await this.$axios.post('/escritorio', {
          ...escritorioData,
        })
        return (window.location.href = '/escritorio')
      } catch (error) {
        console.log(error)
        this.loadingComponent = false
        this.alertError = error.response.data.message
      }
    },
  },
}
</script>
