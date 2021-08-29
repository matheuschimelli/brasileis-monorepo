<template>
  <v-card outlined class="featuredCard" :to="postLink">
    <v-card-title class="brTitleSmall"> {{ title }} </v-card-title>
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
