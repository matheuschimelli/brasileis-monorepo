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
  setup() {
    const indexItems = reactive({
      items: [
        {
          icon: 'mdi-book-open-outline',
          name: 'Artigos',
          link: '/admin/articles',
        },
        {
          icon: 'mdi-web-clock',
          name: 'Crawlers',
          link: '/admin/crawler',
        },
        {
          icon: 'mdi-ethernet',
          name: 'Tipos de Crawlers',
          link: '/admin/crawler-type',
        },
        {
          icon: 'mdi-scale-balance',
          name: 'Leis indexadas',
          link: '/admin/laws',
        },
        {
          icon: 'mdi-link-box-outline',
          name: 'Página de Categorias',
          link: '/admin/category-pages',
        },
        {
          icon: 'mdi-tag',
          name: 'Categorias',
          link: '/admin/categories',
        },
        {
          icon: 'mdi-tag',
          name: 'SubCategorias',
          link: '/admin/sub-categories',
        },
        {
          icon: 'mdi-tag-multiple',
          name: 'Estados e Leis',
          link: '/admin/federated-unit',
        },
        {
          icon: 'mdi-account-cog',
          name: 'Usuários',
          link: '/admin/usuarios',
        },
      ],
    })
    return {
      indexItems,
    }
  },
})
</script>
