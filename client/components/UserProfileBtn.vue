<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="true"
    :nudge-width="200"
    offset-y
    :position-y="100"
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-if="!user"
        text
        to="/login"
        color="#b82f00"
        v-bind="attrs"
        v-on="on"
      >
        Fazer login
      </v-btn>
      <v-btn v-else text color="#b82f00" v-bind="attrs" v-on="on">
        <v-avatar size="32">
          <v-img
            :src="$auth.user.profilePicture"
            :lazy-src="$auth.user.profilePicture"
          ></v-img>
        </v-avatar>
      </v-btn>
    </template>

    <v-card v-if="user" outlined>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="user.profilePicture" alt="John" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item to="/minhaconta">
          <v-list-item-title>Minha conta</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item to="/ajuda">
          <v-list-item-title>Ajuda</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-btn color="primary" text @click="$auth.logout('social')">
          Sair
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    menu: false,
  }),
}
</script>
