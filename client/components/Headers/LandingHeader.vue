<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height" fluid>
      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn text to="/artigos">Artigos </v-btn>
        <v-btn text href="http://www.antoniochimelli.com.br"> Advocacia </v-btn>
        <UserProfileBtn :user="$auth.user" />
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import UserProfileBtn from '@/components/UserProfileBtn'

export default {
  components: {
    UserProfileBtn,
  },
  data() {
    return {
      links: ['Início', 'Consultoria', 'Advocacia'],
    }
  },
}
</script>
