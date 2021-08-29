<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Escritório </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Finalizar </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" outlined>
          <v-card-text>
            <v-text-field
              v-model="escritorio.nome"
              label="Nome do escritório"
              hint="De preferência utilize o mesmo nome que você já usa"
              :aria-autocomplete="false"
              :autocomplete="false"
            ></v-text-field>
            <v-textarea
              v-model="escritorio.descricao"
              :aria-autocomplete="false"
              :autocomplete="false"
              label="Informações e detalhes"
              hint="Essas informações irão aparecer para seus clientes. Escreva aqui dados como endereço e-mail e telefone para contato e área de atuação"
            >
            </v-textarea>
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1 = 2"> Próximo </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card outlined class="mb-12">
          <v-card-subtitle>Pré-visualização do escritório</v-card-subtitle>
          <v-card-title>{{ escritorio.nome }}</v-card-title>
          <v-card-text>
            <b>Informações do escritório: </b><br />
            <div v-text="escritorio.descricao"></div>
          </v-card-text>
        </v-card>

        <v-btn color="primary" :loading="isLoading" @click="onClickButton">
          Finalizar e criar
        </v-btn>

        <v-btn text @click="e1 = 1"> Voltar </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
export default {
  props: ['isLoading'],
  data() {
    return {
      e1: 1,
      escritorio: {},
    }
  },
  methods: {
    onClickButton(event) {
      this.$emit('create', this.escritorio)
    },
  },
}
</script>
