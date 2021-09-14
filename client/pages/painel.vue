<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3" />
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-form ref="form" action="/busca" method="GET">
            <v-text-field
              name="q"
              placeholder="Pesquise leis, jurisprudência entre outros"
              filled
              solo-inverted
              flat
              filed
              single-line
              append-icon="mdi-magnify"
              @click:append="$refs.form.submit()"
            />
          </v-form>
          <v-card elevation="0" color="primary" dark>
            <v-card-title>Sobre a busca</v-card-title>
            <v-card-text>
              Pesquise pela frase exata ou termos correspondentes.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3" />
      </v-row>
    </v-container>
  </v-main>
  <!-- <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title> Pesquisa </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/escritorio">
                <v-list-item-content>
                  <v-list-item-title> Escritório Virtual </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4" to="/minhaconta">
                <v-list-item-content>
                  <v-list-item-title> Configurações </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="3" lg="3" />
                <v-col cols="12" sm="12" md="6" lg="6">
                  <v-form ref="form" action="/busca" method="GET">
                    <v-text-field
                      name="q"
                      placeholder="Pesquisar"
                      filled
                      solo-inverted
                      flat
                      filed
                      single-line
                      append-icon="mdi-magnify"
                      @click:append="$refs.form.submit()"
                    />
                  </v-form>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3" />
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main> -->
</template>
