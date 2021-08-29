<template>
  <client-only>
    <div v-if="editorContent === null">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </div>
    <editor
      v-else
      v-model="editorContent"
      :init="tinyMCESettings"
      @onKeyUp="emitUpdate"
    />
  </client-only>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import tinymceConfig from './tinymce/config'

export default {
  loading: false,
  components: {
    editor: Editor,
  },
  props: ['value', 'loadContent', 'updateDocument'],
  data() {
    return {
      editorSettings: {
        pageBreak: '<span style="page-break-before: always;"></span>',
      },
      editorContent: ``,
    }
  },
  computed: {
    tinyMCESettings() {
      return tinymceConfig.config
    },
  },

  watch: {
    editorContent(val) {
      this.$emit('input', val)
    },
    loadContent(val) {
      this.editorContent = val
    },
  },

  mounted() {
    require('tinymce/tinymce')
    require('tinymce/plugins/autosave')
    require('tinymce/plugins/advlist')
    require('tinymce/plugins/lists')
    require('tinymce/plugins/print')
    require('tinymce/plugins/preview')
    require('tinymce/plugins/anchor')
    require('tinymce/plugins/searchreplace')
    require('tinymce/plugins/visualblocks')
    require('tinymce/plugins/fullscreen')
    require('tinymce/plugins/insertdatetime')
    require('tinymce/plugins/table')
    require('tinymce/plugins/fullpage')
    require('tinymce/plugins/paste')
    require('tinymce/plugins/wordcount')
    require('tinymce/plugins/pagebreak')
    require('tinymce/plugins/autolink')
    require('tinymce/plugins/link')
    require('tinymce/plugins/image')
    require('tinymce/plugins/media')
    require('tinymce/plugins/charmap')
    require('tinymce/plugins/textpattern')
    require('tinymce/plugins/template')
    require('tinymce/plugins/quickbars')
    require('tinymce/plugins/paste')

    require('tinymce/themes/silver')
    require('tinymce/icons/default')
    require('tinymce/skins/ui/oxide/skin.min.css')
    require('tinymce/skins/ui/oxide/content.min.css')
    //  require('tinymce/skins/content/document/content.min.css')
    require('./tinymce/pt_BR')
  },
  methods: {
    emitUpdate() {
      this.$emit('updateDocument', this.editorContent)
    },
  },
}
</script>
<style>
.tox-tinymce {
  border: none !important;
}

.tox-editor-header {
  position: fixed !important;
  width: 100% !important;
}
.tox-edit-area {
  margin-top: 80px !important;
}
</style>
