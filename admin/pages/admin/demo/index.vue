<template>
  <div>
    <h1>{{ sampleData }}</h1>
    <InputTest v-model="sampleData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import InputTest from '~/components/Inputs/ArticleTitleInput.vue'
export default defineComponent({
  components: {
    InputTest,
  },
  setup() {
    const sampleData = ref<string>('Sample Data')

    return {
      sampleData,
    }
  },
})
</script>
