<template>
  <textarea v-model="message" type="text" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
    placeholder: {
      type: String,
      default: 'Título do Artigo',
      required: false,
    },
  },

  setup(props, { emit }) {
    const message = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    return {
      message,
    }
  },
})
</script>
<style lang="scss" scoped>
textarea {
  font-size: 1.5em;
  width: 100%;
  position: relative;
  resize: none;
}
textarea:focus {
  outline: none;
}
</style>
