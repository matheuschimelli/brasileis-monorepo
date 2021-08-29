<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="6" lg="6">
      <v-card outlined>
        <v-card-title>Minha conta</v-card-title>
        <v-card-subtitle>
          Configurações e detalhes da sua conta Brasileis.
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="text--primary">
          <v-row>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-avatar rounded size="150">
                <v-img :src="$auth.user.profilePicture"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="12" md="8" lg="8">
              <h2>
                {{ $auth.user.name }}
                <v-chip class="ma-2" label color="primary">
                  {{ $auth.user.role }}
                </v-chip>
              </h2>

              <span>{{ $auth.user.email }} </span>
              <br />
              <span
                >Conta criada em: {{ formatDate($auth.user.createdAt) }}</span
              >
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title>Planos e assinaturas</v-card-title>
        <v-card-text class="text--primary">
          Seu plano atual é:<br />
          <v-row>
            <v-col cols="12" sm="12" md="2" lg="2">
              <v-chip class="ma-2" label color="green" dark>
                <b>Free</b>
              </v-chip>
            </v-col>
            <v-col cols="12" sm="12" md="10" lg="10">
              O plano Free inclui acesso limitado a pesquisa de leis e
              jurisprudência. Não possui consultoria por chat nem email.
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <!-- <v-card-title>Data de expiração</v-card-title>
        <v-card-text class="text--primary">
          O seu plano expira em:
          <br />
          <br />
          <h1>{{ formatDate($auth.user.expirationDate) }}</h1>
        </v-card-text> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekday from 'dayjs/plugin/weekday'
import pt from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(weekday)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale({
  ...pt,
})
export default {
  methods: {
    formatDate(value) {
      return dayjs(value).format('LLL')
    },
  },
}
</script>
