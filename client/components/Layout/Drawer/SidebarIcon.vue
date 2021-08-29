<template>
  <v-tooltip right>
    <template v-slot:activator="{ on }">
      <v-list-item link :to="link" v-on="on">
        <v-list-item-action>
          <v-icon color="#b82f00">{{ icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{ title }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    link: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
