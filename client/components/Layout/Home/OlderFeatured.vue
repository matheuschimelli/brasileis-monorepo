<template>
  <div class="centerFeatured">
    <GrayCard
      v-for="n in 15"
      :key="n"
      title="O que é a Lei Aldir Blanc e como saber se tenho direito"
      summary="A Lei Aldir Blanc, sancionada pelo Presidente Jair Bolsonaro em junho deste ano, "
      post-link="#"
    />
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import GrayCard from '@/components/Layout/Home/GrayCard.vue'
export default defineComponent({
  components: {
    GrayCard,
  },
  setup() {},
})
</script>

<style lang="scss">
.centerFeatured {
  width: 100%;
  height: 300px;
  padding: 20px;
  color: #fff;
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
}
.centerFeatured::-webkit-scrollbar {
  display: none;
}
</style>
