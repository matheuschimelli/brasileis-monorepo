<template>
  <v-dialog v-model="showDialog" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="close"> Cancelar </v-btn>
        <v-btn color="red darken-1" text @click="confirm"> Confirmar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    confirm: {
      type: Function,
      default: undefined,
    },
    close: {
      type: Function,
      default: undefined,
    },
    message: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showDialog: {
      get() {
        return this.show
      },
      set(val) {
        console.log('SHOW SNACK', this.show)
        return this.show
      },
    },
  },
}
</script>
