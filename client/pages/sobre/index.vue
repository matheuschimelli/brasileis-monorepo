<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="9" lg="9">
        <v-container>
          <v-card outlined class="p-bottom">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  Ajuda
                </v-list-item-title>
                <v-list-item-subtitle>Brasileis</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="100" color="white"
                ><v-img src="/logo.png"
              /></v-list-item-avatar>
            </v-list-item>

            <v-card-text class="text--primary">
              <p>Em caso de dúvidas, sugestões ou elogios em um email para:</p>
              <span><b>contato @ brasileis.com.br</b></span>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Ajuda - Pesquisa Brasileis `,
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ajuda Brasileis. `,
        },
      ],
    }
  },
}
</script>
<style>
.resultsInfo {
  color: #8e8e8e;
  font-size: 14px;
}
.p-bottom {
  margin-bottom: 25px;
}
mark {
  font-weight: 600 !important;
}
.pagination {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
