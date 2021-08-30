<template>
  <v-main class="grey lighten-3">
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
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title> Escritório Virtual </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="my-2"></v-divider>

              <v-list-item link color="grey lighten-4">
                <v-list-item-content>
                  <v-list-item-title> Configurações </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <v-card>
              <v-card-title> Atualização em Diário oficial </v-card-title>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
