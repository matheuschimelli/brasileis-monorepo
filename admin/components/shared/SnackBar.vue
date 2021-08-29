<template>
  <v-snackbar v-model="isOpen" :timeout="2000" top centered :color="compColor">
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: String,
    color: String,
    modelValue: Boolean,
  },
  setup(props, { emit }) {
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit('input', val),
    })

    const compColor = computed({
      get: () => props.color,
      set: (val) => val,
    })

    watch(
      () => props.modelValue,
      (first, second) => {
        console.log(
          'Watch props.selected function called with args:',
          first,
          second
        )
      }
    )

    return {
      isOpen,
      compColor,
    }
  },
})
</script>
<!--
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'success',
    },
    showsnack: {
      type: Boolean,
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    show: {
      get() {
        return this.showsnack
      },
      set(val) {
        console.log('SHOW SNACK', this.showsnack)
        return this.showsnack
      },
    },
  },
}
</script>
-->
