<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div class="border border-gray-200 p-6 rounded-lg">
      <div
        class="
          w-10
          h-10
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-indigo-100
          text-blue-500
          mb-4
        "
      >
        <v-img>
          <v-avatar color="rgba(224, 231, 255, 1)" size="40">
            <v-icon color="#6466f1">{{ icon }}</v-icon>
          </v-avatar>
        </v-img>
      </div>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
        {{ title }}
      </h2>
      <p class="leading-relaxed text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>
