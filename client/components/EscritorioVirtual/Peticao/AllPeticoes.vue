<template>
  <v-app>
    <v-container>
      <v-toolbar color="#f4f4f6" flat rounded>
        <v-toolbar-items>
          <v-btn link text :loading="loadingBtn" @click="$emit('save')">
            <v-icon left>mdi-pencil</v-icon>
            Criar nova Petição
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn link text @click="setView('grid-card')">
            <v-icon> mdi-view-grid-outline </v-icon>
          </v-btn>
          <v-btn link text @click="setView('list')">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!--List Layout-->
      <template v-if="viewStyle == 'list'">
        <v-row v-if="items && items.lenght !== 0" class="mt-5">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" sm="12" md="12" lg="12">
              <v-card outlined :to="`${viewItemUrl}/${item[itemId]}`">
                <v-card-title>
                  <v-icon left> mdi-pencil-circle</v-icon>
                  {{ item[itemTitle] }}
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </template>

      <template v-if="viewStyle == 'grid'">
        <v-row v-if="items && items.lenght !== 0" class="mt-5">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" sm="12" md="3" lg="3">
              <v-card outlined :to="`${viewItemUrl}/${item[itemId]}`">
                <v-card-title>
                  <v-icon left> mdi-pencil-circle</v-icon>
                  {{ item[itemTitle] }}
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </template>

      <template v-if="viewStyle == 'grid-card'">
        <v-row v-if="items && items.lenght !== 0" class="mt-5">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" sm="12" md="3" lg="3">
              <v-card
                outlined
                :to="`${viewItemUrl}/${item[itemId]}`"
                height="150"
              >
                <!-- <v-card-subtitle>{{ item.updatedAt }}</v-card-subtitle> -->
                <v-card-title style="word-break: normal !important">
                  {{ item[itemTitle] }}
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </template>

      <div v-if="!items && items.lenght === 0">
        <center>
          <h2 class="text-h2">Nada encontrado</h2>
        </center>
      </div>
    </v-container>

    <div class="text-center">
      <v-pagination
        v-if="itemsCount"
        v-model="currentPage"
        :length="Math.round(itemsCount / 10)"
        @input="loadNextPage"
      ></v-pagination>
    </div>
  </v-app>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  watchQuery: ['p'],
  middleware: 'admin',
  props: {
    items: {
      type: Array,
      default: null,
    },
    pageName: {
      type: String,
      required: true,
    },
    createNewLink: {
      type: String,
      required: false,
      default: null,
    },
    itemTitle: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    viewItemUrl: {
      type: String,
      required: true,
    },
    itemsCount: {
      type: Number,
      required: true,
      default: null,
    },
    layout: {
      type: String,
      required: false,
      default: 'list',
    },
    loadingBtn: {
      type: Boolean,
      required: false,
      defalt: false,
    },
  },
  setup(props, { emit }) {
    const currentPage = ref(1)
    const viewStyle = ref(props.layout)
    const loadNextPage = (data: number) => emit('onLoadNextPage', data)
    // const viewStyle = computed({
    //   get: () => props.layout,
    //   set: (value) => value,
    // })
    const setView = (view: string) => (viewStyle.value = view)
    return {
      currentPage,
      loadNextPage,
      viewStyle,
      setView,
    }
  },
})
</script>
<style lang="scss">
.customFab {
  margin-bottom: 50px !important;
}
</style>
