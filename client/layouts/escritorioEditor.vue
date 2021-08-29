<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :fixed="$vuetify.breakpoint.lgAndUp"
      :mini-variant="$vuetify.breakpoint.lgAndUp"
      app
      color="#f4f4f6"
      prominent
      floating
      class="d-flex flex-column"
    >
      <v-list dense>
        <nuxt-link to="/">
          <v-avatar color="#b82f00" size="56" tile>
            <strong class="logo">B</strong>
          </v-avatar>
        </nuxt-link>

        <v-spacer></v-spacer>

        <SidebarIcon
          v-if="$auth.user"
          icon="mdi-file-document"
          title="Escritório Virtual"
          link="/escritorio"
        />
        <SidebarIcon
          v-if="$auth.user"
          icon="mdi-book-open-outline"
          title="Petições"
          link="/escritorio/peticoes"
        />
        <v-spacer></v-spacer>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#f4f4f6"
      flat
    >
      <v-btn icon to="/">
        <v-avatar color="#b82f00" size="56" tile>
          <strong class="logo">B</strong>
        </v-avatar>
      </v-btn>

      <v-btn icon link class="ml-5" @click="openSettingsDialog">
        <v-icon>mdi-file-cog</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!-- <div class="hidden-sm-and-down">
        <v-btn text link to="/">Início</v-btn>
        <v-btn text link to="/artigos">Artigos</v-btn>
         <v-btn text link to="/feed">Feed de Leis</v-btn> 
      </div> -->
      <!-- <v-spacer class="hidden-sm-and-down"></v-spacer> -->

      <v-responsive max-width="800">
        <v-form
          action="/escritorio/busca"
          method="GET"
          class="hidden-sm-and-down"
        >
          <div>
            <v-text-field
              hide-details
              placeholder="Pesquisar minhas petições, notas e leis salvas"
              name="q"
              single-line
              dense
              solo-inverted
              autocomplete="off"
            >
            </v-text-field>
          </div>
        </v-form>
      </v-responsive>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!$auth.user"
        icon
        large
        class="hidden-sm-and-down ml-10"
        @click="accountModal = true"
      >
        <v-avatar size="32px" item> <v-icon>mdi-account</v-icon> </v-avatar>
      </v-btn>
      <v-btn
        v-else
        icon
        large
        class="hidden-sm-and-down ml-10"
        to="/minhaconta"
      >
        <v-avatar size="32px" item>
          <v-img :src="`${$auth.user.profilePicture}`"></v-img
        ></v-avatar>
      </v-btn>
      <v-btn icon to="#" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- <v-menu
        class="hidden-md-and-up"
        :close-on-content-click="true"
        :nudge-width="200"
        offset-y
        right
      >
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img :src="$auth.user.profilePicture"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Bem vindo </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <a @click="logout">
            <v-list-item>
              <v-list-item-icon>
                <v-icon> mdi-exit-to-app </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </a>
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>

      <!-- <Footer /> -->

      <v-dialog v-model="accountModal" width="500">
        <v-card>
          <v-card-title class="text-h4"> Entrar no Brasileis </v-card-title>

          <v-card-text class="text-body-1">
            Crie uma conta ou faça login agora mesmo no Brasileis
            <br />
            <li>Utilize a sua conta do Google para fazer login</li>
            <li>Tenha seu Feed de Leis</li>
            <li>Salve suas leis em um só lugar</li>
            <li>Faça anotações nas leis</li>
            <li>
              Encontre artigos, doutrinas, leis e jurisprudências relacionadas
            </li>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <GooleLoginBtn />
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

import SidebarIcon from '@/components/Layout/Drawer/SidebarIcon.vue'
// import Footer from '@/components/Layout/Footer.vue'
import GooleLoginBtn from '@/components/GoogleLoginBtn.vue'
export default Vue.extend({
  components: {
    SidebarIcon,
    // Footer,
    GooleLoginBtn,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    menu: false,
    accountModal: false,
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    openSettingsDialog() {
      this.$nuxt.$emit('openSettingsDialog')
    },
  },
})
</script>
<style scoped>
.content {
  background: #fafafa;
}
a {
  text-decoration: none;
}
.logo {
  color: white;
  font-weight: 600;
  font-size: 30px;
}
.v-navigation-drawer__border {
  display: none !important;
}
</style>
