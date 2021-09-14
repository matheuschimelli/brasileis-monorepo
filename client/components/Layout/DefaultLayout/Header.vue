<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" size="32">
          <v-icon color="primary">mdi-book</v-icon>
        </v-avatar>
        <v-btn to="/" link text>Brasileis</v-btn>

        <v-spacer></v-spacer>

        <div v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
          <v-btn
            v-for="link in links"
            v-show="link.authenticated == authenticated"
            :key="link"
            text
            :to="link.href"
            class="hidden-sm-and-down"
          >
            {{ link.title }}
          </v-btn>
        </div>
        <v-responsive
          v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          v-if="$route.path != '/painel'"
          max-width="260"
          class="ml-5"
        >
          <v-form action="/busca">
            <v-text-field
              hide-details
              solo-inverted
              flat
              placeholder="Pesquisar"
              name="q"
            ></v-text-field>
          </v-form>
        </v-responsive>

        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn color="primary" link icon v-bind="attrs" v-on="on">
              <v-avatar size="36">
                <img :src="user.profilePicture" alt="John" />
              </v-avatar>
            </v-btn>
          </template>
          <v-card outlined>
            <v-list>
              <v-list-item to="/minhaconta">
                <v-list-item-title>Minha Conta</v-list-item-title>
              </v-list-item>
              <v-list-item to="/logout">
                <v-list-item-title>Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-app-bar-nav-icon
          v-show="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="link of links"
            v-show="link.authenticated == authenticated"
            :key="link.href"
            :to="'/' + link.href"
          >
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      default: undefined,
    },
  },
  setup(props) {
    const links = ref<any[]>([
      { title: 'Início', href: '/', authenticated: true },
      // { title: 'Legislação', href: '/legislacao', authenticated: true },
      { title: 'Preço', href: '/', authenticated: false },
      { title: 'Ajuda', href: '/ajuda', authenticated: true },
    ])
    const authenticated = ref<boolean>(false)
    const drawer = ref<boolean>(false)

    onMounted(() => {
      if (props.user) {
        authenticated.value = true
      }
    })

    return {
      links,
      authenticated,
      drawer,
    }
  },
})
</script>
