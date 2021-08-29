<template>
  <v-app-bar color="white" dense fixed>
    <v-btn icon to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-toolbar-title>Brasileis</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
<style scoped>
.mobileHeader {
  position: fixed;
  top: 0;
  z-index: 9999;
  background: white;
  border-bottom: 1px solid #ddd;
}
</style>
