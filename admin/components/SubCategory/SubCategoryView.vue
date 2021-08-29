<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12">
      <v-card>
        <v-card-title
          ><v-text-field
            v-model="data.name"
            label="Título SubCategoria"
            placeholder="Título da SubCategoria"
        /></v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    value: Object,
  },
  setup(props, { emit }) {
    const data = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    return {
      data,
    }
  },
})
</script>
