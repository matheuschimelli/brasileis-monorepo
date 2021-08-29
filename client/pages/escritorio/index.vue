<template>
  <div>
    <v-row class="mt-10">
      <v-col
        v-for="item of indexItems.items"
        :key="item.name"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-btn
          color="#f4f4f6"
          depressed
          large
          block
          light
          :to="item.link"
          height="100"
        >
          <v-icon left color="#b82f00" size="20">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'escritorio',
  setup() {
    const indexItems = reactive({
      items: [
        {
          icon: 'mdi-book-open-outline',
          name: 'Petições',
          link: '/escritorio/peticoes',
        },
      ],
    })
    return {
      indexItems,
    }
  },
})
</script>
