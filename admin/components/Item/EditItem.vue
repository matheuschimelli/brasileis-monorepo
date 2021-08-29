<template>
  <v-container>
    <v-toolbar color="#f4f4f6" flat rounded>
      <v-toolbar-items>
        <v-btn
          v-if="saveButton"
          link
          text
          :loading="saveButtonLoading"
          @click="$emit('save')"
        >
          <v-icon left color="success">mdi-content-save-edit</v-icon>
          Salvar
        </v-btn>

        <v-btn
          v-if="updateButton"
          link
          text
          :loading="updateButtonLoading"
          @click="$emit('save')"
        >
          <v-icon left color="success">mdi-content-save-edit</v-icon>
          Atualizar
        </v-btn>

        <v-btn
          v-if="saveDraftButton"
          link
          text
          :loading="saveDraftButtonLoading"
          @click="$emit('saveDraft')"
        >
          <v-icon left color="orange">mdi-content-save-settings</v-icon>
          Salvar rascunho
        </v-btn>

        <v-btn
          v-if="runNowButton"
          link
          text
          :loading="runNowButtonLoading"
          @click="$emit('runNow')"
        >
          <v-icon left color="primary">mdi-play-speed</v-icon>
          Executar agora
        </v-btn>

        <v-btn
          v-if="changePermissionButton"
          link
          text
          :loading="changePermissionButtonLoading"
          @click="$emit('changePermission')"
        >
          <v-icon left color="primary">mdi-account-lock</v-icon>
          Alterar permissões de acesso
        </v-btn>

        <v-btn
          v-if="deleteButton"
          link
          text
          :loading="deleteButtonLoading"
          @click="$emit('remove')"
        >
          <v-icon left color="red">mdi-trash-can</v-icon>
          Apagar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="mt-10">
      <slot></slot>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    saveButton: {
      type: Boolean,
      default: false,
    },
    saveDraftButton: {
      type: Boolean,
      default: false,
    },
    changePermissionButton: {
      type: Boolean,
      default: false,
    },
    deleteButton: {
      type: Boolean,
      default: false,
    },
    updateButton: {
      type: Boolean,
      default: false,
    },
    runNowButton: {
      type: Boolean,
      default: false,
    },

    /**
     * Button Loading
     */

    saveButtonLoading: {
      type: Boolean,
      default: false,
    },
    saveDraftButtonLoading: {
      type: Boolean,
      default: false,
    },
    changePermissionButtonLoading: {
      type: Boolean,
      default: false,
    },
    deleteButtonLoading: {
      type: Boolean,
      default: false,
    },
    updateButtonLoading: {
      type: Boolean,
      default: false,
    },
    runNowButtonLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
})
</script>
