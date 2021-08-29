<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="isVisible" :timeout="2000" color="success">
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props: ['text', 'color', 'visible'],
  computed: {
    isVisible() {
      return this.visible
    },
  },
}
</script>
