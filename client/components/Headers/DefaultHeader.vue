<template>
  <div>
    <v-app-bar app color="white" flat height="90" class="navBar">
      <v-container class="py-0 fill-height">
        <v-avatar size="32" tile> <v-img src="/logo.png" to="/" /></v-avatar>
        <v-btn text to="/" class="logo hidden-sm-and-down"> Brasileis </v-btn>
        <v-responsive max-width="500">
          <v-form action="/busca" method="GET" class="hidden-sm-and-down">
            <div>
              <v-text-field
                v-model="searchQuery"
                dense
                outlined
                hide-details
                placeholder="Pesquisa do momento: ICMS"
                color="#b82f00"
                name="q"
              >
                <template v-slot:append>
                  <v-btn
                    depressed
                    color="#b82f00"
                    class="searchBtn"
                    type="submit"
                    small
                  >
                    <v-icon color="white">mdi-magnify </v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    class="ml-5 searchBtn"
                    type="button"
                    small
                    color="#b82f00"
                    title="Exibir filtros"
                    @click="showFilters"
                  >
                    <v-icon
                      >{{
                        showFiltersBox
                          ? 'mdi-arrow-up-drop-circle-outline'
                          : 'mdi-arrow-down-drop-circle-outline'
                      }}
                    </v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </div>
          </v-form>
        </v-responsive>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn text to="/artigos"> Artigos </v-btn>
          <!--
          <v-btn v-if="!$auth.user" text to="/login" color="#b82f00">
            Fazer Login
          </v-btn>
          <v-btn v-else to="/minhaconta" icon>
            <v-avatar size="32">
              <v-img
                :src="$auth.user.profilePicture"
                :lazy-src="$auth.user.profilePicture"
              ></v-img>
            </v-avatar>
          </v-btn> -->
          <UserProfileBtn :user="$auth.user" />
        </div>
      </v-container>
    </v-app-bar>

    <transition name="slide">
      <div v-show="showFiltersBox">
        <v-container>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="9" lg="9">
                <v-card outlined :loading="boxLoading">
                  <v-card-subtitle>Filtros de pesquisa</v-card-subtitle>
                  <v-card-text>
                    <v-form method="GET" action="/busca">
                      <v-text-field
                        v-model="searchQuery"
                        name="q"
                        placeholder="Termo de busca"
                        label="Pesquisar"
                        outlined
                        dense
                        color="#b82f00"
                      ></v-text-field>
                      <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6">
                          <v-select
                            v-model="search.categories"
                            name="categories"
                            :items="categories"
                            attach
                            item-value="name"
                            item-text="name"
                            outlined
                            label="Categorias"
                            multiple
                            small-chips
                            chips
                            item-color="#b82f00"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6">
                          <v-select
                            v-model="search.subCategories"
                            name="subcategories"
                            :items="subCategories"
                            attach
                            item-value="name"
                            item-text="name"
                            outlined
                            label="Sub-Categorias"
                            multiple
                            small-chips
                            chips
                            item-color="#b82f00"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-btn dark type="submit" color="#b82f00" depressed block
                        >Pesquisar</v-btn
                      >
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </div>
    </transition>
  </div>
</template>
<script>
import UserProfileBtn from '@/components/UserProfileBtn'
export default {
  components: {
    UserProfileBtn,
  },
  data() {
    return {
      drawer: false,
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
.navBar {
  border-bottom: 1px solid #ddd !important;
}
.searchBtn {
  bottom: 4px !important;
  top: -2px !important;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
