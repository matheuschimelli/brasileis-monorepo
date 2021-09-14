<template>
  <v-app>
    <header class="text-gray-600 body-font">
      <Header :user="$auth.user" />
    </header>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer>
      <v-container class="flex content-center justify-between">
        <span>(c) Brasileis 2021</span>
        <v-btn link text to="/ajuda">Ajuda</v-btn>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import Header from '@/components/Layout/DefaultLayout/Header'
export default Vue.extend({
  components: {
    Header,
  },
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
  },
})
</script>
