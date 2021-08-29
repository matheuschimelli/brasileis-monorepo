<template>
  <ClientOnly>
    <div id="app">
      <div class="document-editor__toolbar"></div>
      <div class="document-editor__editable-container">
        <ckeditor
          v-model="editorContent"
          :editor="editor"
          :config="editorConfig"
          :value="editorContent"
          @ready="onReady"
        ></ckeditor>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  // watch,
} from '@nuxtjs/composition-api'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'

export default defineComponent({
  props: {
    value: String,
  },

  setup(props, { emit }) {
    const editor = DecoupledEditor
    const editorConfig = reactive({
      editorConfig: {
        // The configuration of the editor.
      },
    })

    const editorContent = computed({
      get: () => props.value,
      set: (value) => emit('input', value),
    })

    const onReady = (editor: any) => {
      // Insert the toolbar before the editable area.
      const toolbarContainer = document.querySelector(
        '.document-editor__toolbar'
      )
      if (toolbarContainer)
        toolbarContainer.appendChild(editor.ui.view.toolbar.element)
    }

    /*
    watch(editorContent, (newContent, previousContent) => {
      console.log('NEW CONTENT', newContent)
      console.log('OLD CONTENT', previousContent)
      emit('input', newContent)
    })
*/
    return {
      editorContent,
      editor,
      editorConfig,
      onReady,
    }
  },
})
</script>
<style scoped>
.ck-focused {
  outline: 0;
  border: none !important;
  box-shadow: none !important;
}
.document-editor__toolbar {
  z-index: 1;
  border-bottom: 1px solid var(--ck-color-toolbar-border);
}
.document-editor__toolbar .ck-toolbar {
  border: 0;
  border-radius: 0;
}
.document-editor__editable-container {
  overflow-y: scroll;
}
.document-editor__editable-container .ck-editor__editable {
  padding: 20px;
  min-height: 500px;
  background: white;
  margin: 0 auto;
  color: black;
}
.document-editor .ck-content,
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
  font: 16px/1.6 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.document-editor .ck-heading-dropdown .ck-list .ck-button__label {
  line-height: calc(
    1.7 * var(--ck-line-height-base) * var(--ck-font-size-base)
  );
  min-width: 6em;
}
.document-editor .ck-content h2,
.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {
  font-size: 2.18em;
  font-weight: normal;
}
.document-editor .ck-content h4,
.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {
  font-size: 1.31em;
  font-weight: bold;
}
.document-editor .ck-content h3,
.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {
  font-size: 1.75em;
  font-weight: normal;
  color: hsl(203, 100%, 50%);
}
.document-editor
  .ck-heading-dropdown
  .ck-heading_heading2.ck-on
  .ck-button__label {
  color: var(--ck-color-list-button-on-text);
}

.document-editor
  .ck-heading-dropdown
  .ck-list
  .ck-button:not(.ck-heading_paragraph)
  .ck-button__label {
  transform: scale(0.8);
  transform-origin: left;
}
.document-editor .ck-content h2 {
  line-height: 1.37em;
  padding-top: 0.342em;
  margin-bottom: 0.142em;
}
.document-editor .ck-content h3 {
  line-height: 1.86em;
  padding-top: 0.171em;
  margin-bottom: 0.357em;
}
.document-editor .ck-content h4 {
  line-height: 1.24em;
  padding-top: 0.286em;
  margin-bottom: 0.952em;
}
.document-editor .ck-content p {
  font-size: 16px !important;
  line-height: 1.5em !important;
}
.document-editor .ck-content blockquote {
  font-family: Georgia, serif;
  margin-left: calc(2 * var(--ck-spacing-large));
  margin-right: calc(2 * var(--ck-spacing-large));
}
</style>
