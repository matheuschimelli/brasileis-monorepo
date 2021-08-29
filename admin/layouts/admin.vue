<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :fixed="$vuetify.breakpoint.lgAndUp"
      color="#37474f"
      dark
      :mini-variant="$vuetify.breakpoint.lgAndUp"
    >
      <v-list dense class="customListColor">
        <v-list-item class="hidden-md-and-up" two-line>
          <v-list-item-avatar>
            <!--  <img :src="$auth.user.user.profile.picture" /> -->
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> Bem vindo, </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="hidden-md-and-up"></v-divider>

        <template>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item
                link
                href="https://www.brasileis.com.br"
                target="_blank"
                v-on="on"
              >
                <v-list-item-action>
                  <v-icon>mdi-monitor-screenshot</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Voltar ao app </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Voltar ao app</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/articles" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-book-open-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Artigos </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Artigos</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/crawler" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-web-clock</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Crawlers </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Crawlers</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/crawler-type" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-ethernet</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Tipos de Crawlers e definições
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Tipos de Crawlers e definições</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/laws" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-scale-balance</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Leis </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Leis</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/category-pages" v-on="on">
                <v-list-item-action>
                  <v-icon> mdi-link-box-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Páginas de Categorias </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span> Páginas de Categorias</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/categories" v-on="on">
                <v-list-item-action>
                  <v-icon> mdi-tag</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Categorias </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Categorias</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/sub-categories" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-tag-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Sub categorias </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Sub categorias</span>
          </v-tooltip>

          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/federated-unit" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-tag-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Estados (Unidades Federativas)
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span> Estados (Unidades Federativas)</span>
          </v-tooltip>

          <!--
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/usuarios" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Grupos </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Grupos</span>
          </v-tooltip>
-->
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/admin/usuarios" v-on="on">
                <v-list-item-action>
                  <v-icon>mdi-account-cog</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Usuários </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Usuários</span>
          </v-tooltip>
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
      color="white "
      light
      flat
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-0 pl-4 hidden-sm-and-down">
        <nuxt-link to="/admin"
          ><span class="hidden-sm-and-down logo">
            Painel Brasileis
          </span></nuxt-link
        >
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
              <!--
              <v-img
                :src="$auth.user.user.profile.picture"
                alt="Vuetify"
              ></v-img
            >            -->
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
export default {
  data: () => ({
    search: null,
    results: [],
    isLoading: false,
    selectedSearch: null,
    dialog: false,
    drawer: null,
    menu: false,
    lembretes: null,
    lembretesLength: 0,
    newLembretes: null,
    lembretesId: null,
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
  color: white;
  background: #0275d8;
  padding: 5px;
  border-radius: 5px;
}
.customListColor {
  background: rgb(55, 71, 79) !important;
}
</style>
