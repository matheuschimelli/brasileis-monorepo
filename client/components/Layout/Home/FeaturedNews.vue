<template>
  <v-card v-if="postLink" outlined class="featuredCard" :to="postLink">
    <v-img
      v-if="coverImg"
      class="white--text align-end"
      height="200px"
      :src="coverImg"
    >
      <v-card-title class="textShadaw brTitle">
        {{ title }}
      </v-card-title>
    </v-img>
    <v-card-title v-if="!coverImg" class="brTitle">
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="brCardSubTitle">
      <strong style="color: #b82f00">Em Destaque</strong>
    </v-card-subtitle>

    <v-card-text class="brCardText">
      <div>
        {{ summary }}
      </div>
    </v-card-text>
  </v-card>
  <div v-else>Não foi possível carregar essa notícia. Tente mais tarde.</div>
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
