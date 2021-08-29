<template>
  <v-dialog v-model="modal" max-width="475">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ content }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" text @click="emitClose">
          Cancelar
        </v-btn>
        <v-btn color="error darken-1" text @click="emitDelete">
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    document: {
      type: Object,
      default: Object,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      documentData: {},
    }
  },
  computed: {
    modal: {
      get() {
        return this.isOpen
      },
      set() {
        return false
      },
    },
  },

  watch: {
    documentData(val) {
      this.$emit('input', val)
    },
    document(val) {
      this.documentData = val
    },
  },
  methods: {
    emitDelete() {
      this.$emit('onConfirmDelete')
    },
    emitClose() {
      this.$emit('onClose')
    },
  },
}
</script>
