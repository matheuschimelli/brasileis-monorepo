<template>
  <v-bottom-navigation fixed grow color="#b82f00">
    <v-btn value="artigos" to="/artigos">
      <span>Artigos</span>
      <v-icon>mdi-newspaper-variant-outline</v-icon>
    </v-btn>

    <v-btn value="" to="/">
      <span>Pesquisar</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn value="legislacao" to="/legislacao">
      <span>Legislação</span>
      <v-icon>mdi-scale-balance</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      activeBtn: 0,
    }
  },
}
</script>
