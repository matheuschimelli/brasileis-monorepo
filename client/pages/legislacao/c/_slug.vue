<template>
  <div>
    <v-card v-for="law in laws" :key="law._id" elevation="0" class="mb-10">
      <nuxt-link :to="'/legislacao/' + law.slug">
        <v-card-title class="headline">
          {{ law.title }}
        </v-card-title>
      </nuxt-link>
      <v-card-text>
        <p>
          {{ law.summary }}
        </p>
      </v-card-text>
    </v-card>

    <v-btn
      v-if="currentPage >= 2"
      link
      :to="'?page=' + previousPage"
      color="primary"
      depressed
      >Anterior</v-btn
    >

    <v-btn link :to="'?page=' + nextPage" color="primary" depressed
      >Próxima página</v-btn
    >
  </div>
</template>
<script>
export default {
  watchQuery: ['page'],

  async asyncData({ $axios, params, query }) {
    const page = query.page || 1
    const nextPage = parseInt(page) + parseInt(1)
    const previousPage = parseInt(page) - parseInt(1)

    try {
      const { data: categories } = await $axios.get(
        `/categories/${params.slug}`
      )
      return {
        laws: categories.laws,
        currentPage: page,
        nextPage,
        previousPage,
      }
    } catch (error) {}
  },
}
</script>
<style scoped>
.v-card a {
  text-decoration: none;
  color: #212121;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
</style>
