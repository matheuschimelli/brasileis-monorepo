<template>
  <v-app>
    <v-app-bar app color="white" flat height="90">
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn text to="/indice"> Índice legislativo </v-btn>

          <UserProfileBtn :user="$auth.user" />
        </div>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>mdi-apps</v-icon>
        </v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-if="$auth.user" to="/minhaconta">
            <v-list-item-avatar>
              <v-avatar size="32"
                ><v-img :src="$auth.user.profilePicture"> </v-img
              ></v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ $auth.user.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-else to="/login">
            <v-list-item-avatar>
              <v-avatar size="32"><v-icon>mdi-account</v-icon> </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> Fazer login </v-list-item-title>

              <v-list-item-subtitle
                >Entre ou crie uma conta
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item to="/">
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item to="/indice">
            <v-list-item-title>Índice legislativo</v-list-item-title>
          </v-list-item>

          <v-list-item to="/artigos">
            <v-list-item-title>Artigos</v-list-item-title>
          </v-list-item>

          <v-list-item href="https://www.antoniochimelli.com.br">
            <v-list-item-title>Consultoria </v-list-item-title>
          </v-list-item>

          <v-list-item to="/escritorio">
            <v-list-item-title>Escritorio Virtual </v-list-item-title>
          </v-list-item>

          <v-list-item to="/ajuda">
            <v-list-item-title>Ajuda</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <DefaultFooter />
  </v-app>
</template>
<script>
import UserProfileBtn from '@/components/UserProfileBtn'
import DefaultFooter from '@/components/Footers/DefaultFooter'
export default {
  components: {
    UserProfileBtn,
    DefaultFooter,
  },
  data() {
    return {
      drawer: false,
      group: null,
      searchQuery: this.$route.query.q || '',
      showFiltersBox: false,
      boxLoading: true,
      categories: [],
      subCategories: [],
      search: {
        categories: [],
        subCategories: [],
      },
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    if (this.$route.query.categories) {
      this.$route.query.categories
        .split(',')
        .forEach((item) => this.search.categories.push(item))
    }
    if (this.$route.query.subCategories) {
      this.$route.query.subCategories
        .split(',')
        .forEach((item) => this.search.subCategories.push(item))
    }
  },
  methods: {
    async showFilters() {
      this.showFiltersBox = !this.showFiltersBox
      const { data: categories } = await this.$axios.get(
        '/search/filter/categories'
      )
      const { data: subCategories } = await this.$axios.get(
        '/search/filter/sub-categories'
      )
      if (categories && subCategories) {
        this.categories = categories
        this.subCategories = subCategories
        this.boxLoading = false
      }
    },
  },
}
</script>
<style scoped>
.backgroundGray {
  background: #b3b3b308;
}
a {
  color: #373737;
  font-weight: 500;
  text-decoration: none;
}
.header-logo {
  margin: 5px;
}
.logo {
  font-family: 'Khula', sans-serif !important;
  color: #b82f00;
  font-size: 1.7em;
  text-transform: uppercase;
}
</style>
