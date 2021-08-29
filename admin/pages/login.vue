<template>
  <v-app id="inspire" light>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <h1>{{ formError }}</h1>
            <v-card outlined>
              <v-toolbar light flat>
                <v-spacer />

                <v-toolbar-title class="font-weight-light"
                  >Painel de Controle</v-toolbar-title
                >
                <v-spacer />
              </v-toolbar>
              <v-card-text class="loginContent my-5"
                ><LoginGoogleBtn />
              </v-card-text>
              <v-card-actions class="center">
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginGoogleBtn from '@/components/shared/LoginGoogleBtn'
export default {
  layout: 'login',
  components: {
    LoginGoogleBtn,
  },
  data() {
    return {
      email: '',
      password: '',
      formError: null,
    }
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.center {
  text-align: center;
}
.imgLogo {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
img {
  width: 200px;
}
</style>
