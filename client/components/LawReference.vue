<template>
  <div>
    <v-card
      v-if="lawReferenceData._source"
      class="mx-auto"
      max-width="344"
      :to="'/legislacao/' + lawReferenceData._source.slug"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Referência relacionada</div>
          <v-list-item-title class="headline mb-1">
            {{ lawReferenceData._source.title }}</v-list-item-title
          >
          <v-list-item-subtitle>
            <span v-html="lawReferenceData.highlight.textContent[0]"></span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          small
          outlined
          text
          :to="'/busca?q=' + encodeURIComponent(lawReferenceData._source.title)"
        >
          Pesquisa relacionada
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else>
      <v-card-text>
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    lawReferenceData: {
      type: Object,
      default: null,
    },
  },
}
</script>
