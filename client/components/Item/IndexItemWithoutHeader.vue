<template>
  <v-app>
    <v-container>
      <!--List Layout-->
      <template v-if="viewStyle == 'list'">
        <v-row v-if="items && items.lenght !== 0" class="mt-5">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" sm="12" md="12" lg="12">
              <v-card
                outlined
                :to="`${viewItemUrl}/${item[itemId]}`"
                class="articleCard mb-10"
              >
                <v-card-title class="cardTitle">
                  <v-icon left> mdi-pencil-circle</v-icon>
                  {{ item[itemTitle] }}
                </v-card-title>
                <v-card-text>{{ item.summary }}</v-card-text>
                <v-divider></v-divider>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </template>

      <template v-if="viewStyle == 'grid'">
        <v-row v-if="items && items.lenght !== 0" class="mt-5">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" sm="12" md="3" lg="3">
              <v-card
                outlined
                :to="`${viewItemUrl}/${item[itemId]}`"
                class="articleCard mb-10"
              >
                <v-card-title class="cardTitle">
                  <v-icon left> mdi-pencil-circle</v-icon>
                  {{ item[itemTitle] }}
                </v-card-title>
                <v-card-text>{{ item.summary }}</v-card-text>
                <v-divider></v-divider>
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
<style scoped>
.articleCard {
  border: none !important;
  background: #fff !important;
}
.cardTitle {
  font-family: 'IBM Plex Serif', serif;
  line-height: 1.5em !important;
  word-break: normal !important;
  font-weight: bold !important;
  font-size: 1.5em;
}
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 77px;
}
</style>
