<template>
  <v-row v-if="!escritorio" justify="center" align="center">
    <v-col cols="12" sm="12" md="6" lg="6">
      <v-card outlined tile>
        <v-card-title>Escritório virtual Brasileis</v-card-title>
        <v-card-text>
          Parece que você ainda não tem um escritório virtual Brasileis.<br />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="success" to="criar"> Criar escritório </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: ['auth', 'dontHasEscritorio'],
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get('/escritorio')

      return {
        escritorio: data.escritorio,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
