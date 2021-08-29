<template>
  <v-app>
    <div>
      <v-btn
        class="ma-2"
        tile
        outlined
        color="success"
        to="/admin/federated-unit/new"
      >
        <v-icon left>mdi-pencil</v-icon> Adicionar
      </v-btn>
    </div>
    <v-list>
      <v-subheader>Estados (Unidades Federativas)</v-subheader>
      <template v-for="(fedUnit, index) in federatedUnits">
        <v-list-item
          :key="fedUnit.id"
          link
          two-line
          subheader
          :to="'/admin/federated-unit/' + fedUnit.id"
        >
          <v-list-item-avatar>
            <v-icon>mdi-pencil-circle-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ fedUnit.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider
          v-if="index < federatedUnits.length - 1"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-app>
</template>
<script>
export default {
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      laws: null,
      loadingAnnouncementeButton: false,
      federatedUnits: null,
      alert: {
        message: null,
        error: false,
      },
    }
  },
  async created() {
    await this.fetchIndex()
    console.log(this.editorContent)
  },
  methods: {
    async fetchIndex() {
      try {
        const { data } = await this.$axios.get('/federated-units')
        this.federatedUnits = data
      } catch (error) {
        console.log(error)
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
