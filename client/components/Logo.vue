<template>
  <v-avatar color="#b82f00" :size="size" tile>
    <strong class="logo">B</strong>
  </v-avatar>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    size: {
      type: String,
      required: false,
      default: '56',
    },
  },
  setup() {},
})
</script>
