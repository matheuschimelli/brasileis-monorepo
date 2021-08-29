<template>
  <v-row>
    <v-col cols="12" sm="12" md="4" lg="4">
      <v-card max-width="375" class="mx-auto">
        <v-img :src="data.user.profilePicture" height="300px" dark>
          <v-row class="fill-height">
            <v-card-title class="white--text pl-12 pt-12">
              <div class="display-1 pl-12 pt-12">{{ data.name }}</div>
              <br />
              <div class="display-1 pl-12 pt-12">{{ data.id }}</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-account-tie </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ data.role }}</v-list-item-title>
              <v-list-item-subtitle>Nível de Usuário</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ data.email }}</v-list-item-title>
              <v-list-item-subtitle>Google</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-calendar </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{
                fixDate(data.createdAt)
              }}</v-list-item-title>
              <v-list-item-subtitle>Conta criada em</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-calendar-alert </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                fixDate(data.expirationDate)
              }}</v-list-item-title>
              <v-list-item-subtitle>Data de Expiração</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="8" lg="8">
      <v-card>
        <v-card-title>Pesquisas realizadas e perguntas</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
// import {} from 'dayjs'

export default defineComponent({
  props: {
    value: Object,
  },

  setup(props, { emit }) {
    const data = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    const fixDate = (date: string) => {
      return date
    }

    return {
      data,
      fixDate,
    }
  },
})
</script>
<style lang="scss" scoped>
.editArticle {
  font-size: 16px !important;
  font-family: 'Arial', sans-serif;
  line-height: 1.5em;
  a {
    text-decoration: none;
  }
}
</style>
