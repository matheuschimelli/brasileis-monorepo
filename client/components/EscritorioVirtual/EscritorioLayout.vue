<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      :fixed="$vuetify.breakpoint.lgAndUp"
      light
      :mini-variant="$vuetify.breakpoint.lgAndUp"
    >
      <v-list dense>
        <template>
          <v-tooltip v-if="logo" right>
            <template v-slot:activator="{ on }">
              <v-list-item link to="/escritorio" exact v-on="on">
                <v-list-item-action>
                  <v-avatar size="32" tile>
                    <v-img src="/logo.png" title="Brasileis" alt="Brasileis" />
                  </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Voltar ao painel</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Voltar ao painel</span>
          </v-tooltip>

          <v-tooltip v-if="docSettings" right>
            <template v-slot:activator="{ on }">
              <v-list-item link exact v-on="on" @click="emitOpenDocSettings">
                <v-list-item-action>
                  <v-icon color="#b82f00">mdi-file-cog-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Configurações do documento</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>Configurações do documento</span>
          </v-tooltip>

          <v-tooltip v-for="link in navUrls" :key="link.name" right>
            <template v-slot:activator="{ on }">
              <v-list-item link :to="link.url" exact v-on="on">
                <v-list-item-action>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> {{ link.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>{{ link.name }}</span>
          </v-tooltip>
        </template>
      </v-list>
    </v-navigation-drawer>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    logo: {
      type: Boolean,
      default: false,
    },
    docSettings: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: true,
    group: null,
    navUrls: [
      {
        name: 'Petições',
        url: '/escritorio/peticoes',
        icon: 'mdi-file-document',
      },
      {
        name: 'Clientes',
        url: '/escritorio/clientes',
        icon: 'mdi-account-multiple',
      },
      /*
      {
        name: 'Processos',
        url: '/escritorio/processos',
        icon: 'mdi-folder-account-outline',
      },/*
      /*
      {
        name: 'Anotações',
        url: '/escritorio/notas',
        icon: 'mdi-pencil-box',
      }, 
      {
        name: 'Configurações',
        url: '/escritorio/configuracoes',
        icon: 'mdi-cog',
      },
      */
    ],
  }),

  watch: {
    group() {
      this.drawer = true
    },
  },
  methods: {
    emitOpenDocSettings() {
      this.$emit('docSettings')
    },
  },
}
</script>
