<template>
  <ClientOnly>
    <div id="app">
      <div class="document-editor__toolbar"></div>
      <div class="document-editor__editable-container">
        <ckeditor
          v-model="editorData"
          :editor="editor"
          :config="editorConfig"
          :value="value"
          @ready="onReady"
        ></ckeditor>
      </div>
    </div>
  </ClientOnly>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'

export default {
  props: ['value', 'loadContent'],
  data: () => ({
    editor: DecoupledEditor,
    editorData: '<p>Content of the editor.</p>',
    editorConfig: {
      // The configuration of the editor.
    },
  }),
  watch: {
    editorData(val) {
      this.$emit('input', val)
    },
    loadContent(val) {
      this.editorData = val
    },
  },
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      const toolbarContainer = document.querySelector(
        '.document-editor__toolbar'
      )
      toolbarContainer.appendChild(editor.ui.view.toolbar.element)
    },
  },
}
</script>
