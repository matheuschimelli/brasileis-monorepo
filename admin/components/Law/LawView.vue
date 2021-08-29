<template>
  <v-row>
    <v-col cols="12" sm="12" md="9" lg="9">
      <v-card>
        <v-card-title>
          <ArticleTitleInput v-model="data.title" />
        </v-card-title>
        <v-card-text class="editArticle">
          <TextEditor v-model="data.htmlContent" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3">
      <v-card>
        <v-card-title>Categorias</v-card-title>
        <v-card-text>
          <CategoriesInput v-model="data.categories" />
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-title>Sub Categorias</v-card-title>
        <v-card-text>
          <SubCategoriesInput v-model="data.subCategories" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import ArticleTitleInput from '@/components/Inputs/ArticleTitleInput.vue'
import TextEditor from '@/components/Inputs/TextEditor.vue'
import CategoriesInput from '@/components/Inputs/CategoriesInput.vue'
import SubCategoriesInput from '@/components/Inputs/SubCategoriesInput.vue'

export default defineComponent({
  props: {
    value: Object,
  },
  components: {
    ArticleTitleInput,
    TextEditor,
    CategoriesInput,
    SubCategoriesInput,
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
<style lang="scss" scoped>
.editArticle {
  font-size: 16px !important;
  font-family: 'Arial', sans-serif;
  line-height: 1.5em;
  a {
    text-decoration: none;
  }
}
</style>
