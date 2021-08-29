<template>
  <v-card
    outlined
    class="featuredCard grayBg"
    :to="postLink"
    min-width="300"
    min-height="200"
  >
    <v-card-title> {{ title }} </v-card-title>
    <v-card-text>{{ summary }}</v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    summary: {
      required: true,
      type: String,
      default: '',
    },
    coverImg: {
      required: false,
      type: String,
      default: null,
    },
    postLink: {
      type: String,
      required: true,
      default: null,
    },
  },
  setup() {},
})
</script>
<style lang="scss">
.grayBg {
  background: #f4f4f6 !important;
  margin-left: 10px;
}
</style>
