<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :fixed="$vuetify.breakpoint.lgAndUp"
      color="#f4f4f6"
      dark
      :mini-variant="$vuetify.breakpoint.lgAndUp"
    >
      <v-list dense class="customListColor">
        <v-list-item class="hidden-md-and-up" two-line>
          <v-list-item-avatar>
            <img v-if="$auth.user" :src="$auth.user.profilePicture" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              Bem vindo {{ $auth.user.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="hidden-md-and-up"></v-divider>

        <template>
          <SidebarIcon
            icon="mdi-monitor-screenshot"
            title="Brasileis"
            link="https://www.brasileis.com.br"
          />
          <SidebarIcon
            icon="mdi-book-open-outline"
            title="Artigos"
            link="/admin/articles"
          />

          <SidebarIcon
            icon="mdi-web-clock"
            title="Crawlers"
            link="/admin/crawler"
          />

          <SidebarIcon
            icon="mdi-ethernet"
            title="Tipos de Crawlers e Definições"
            link="/admin/crawler-type"
          />

          <SidebarIcon
            icon="mdi-scale-balance"
            title="Leis indexadas"
            link="/admin/laws"
          />

          <SidebarIcon
            icon="mdi-link-box-outline"
            title="Página de Categorias"
            link="/admin/category-pages"
          />

          <SidebarIcon
            icon="mdi-tag"
            title="Categorias de Leis, decretos, artigos e outros"
            link="/admin/categories"
          />

          <SidebarIcon
            icon="mdi-tag"
            title="Sub categorias de Leis, decretos, artigos e outros"
            link="/admin/sub-categories"
          />

          <SidebarIcon
            icon="mdi-tag-multiple"
            title="Estados e Leis"
            link="/admin/federated-unit"
          />

          <SidebarIcon
            icon="mdi-account-cog"
            title="Usuários"
            link="/admin/usuarios"
          />
        </template>

        <a href="/logout"
          ><v-list-item class="hidden-md-and-up" link>
            <v-list-item-action>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Sair </v-list-item-title>
            </v-list-item-content>
          </v-list-item></a
        >
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#f4f4f6"
      light
      flat
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-0 pl-4">
        <nuxt-link to="/">
          <span class="logo"> Painel Brasileis </span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-menu
        class="hidden-md-and-up"
        :close-on-content-click="true"
        :nudge-width="200"
        offset-y
        right
      >
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img :src="$auth.user.profilePicture" alt="Vuetify"></v-img>
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
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarIcon from '@/components/Layout/Drawer/SidebarIcon.vue'
export default {
  components: {
    SidebarIcon,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    menu: false,
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
<style scoped>
.content {
  background: #fafafa;
}
a {
  text-decoration: none;
}
.logo {
  color: #b82f00;
  font-weight: 600;
}
</style>
