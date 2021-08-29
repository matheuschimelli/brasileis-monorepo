// import 'tinymce/skins/content/document'
// import 'tinymce/skins/ui/oxide'

import customPlugin from './plugins/mybuttonMenu/plugin'
import cuPlugin from './plugins/myCustomToolbarButton/plugin'
// import documentCss from './document.css'

const contentCss = `
@media print {
  body{
    margin-top:3cm !important;
    margin-left:3cm !important;
    margin-right:2cm !important;
    margin-bottom:2cm !important;
    padding:0 !important;
  }
}
@media screen {
  html {
    background: #f4f4f4;
    min-height: 100%;
  }
}
body {
  font-family: 'Arial', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media screen {
  body {
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    margin: 1rem auto 0;
    max-width: 820px;
    min-height: calc(100vh - 1rem);
  }
}
table {
  border-collapse: collapse;
}
/* Apply a default padding if legacy cellpadding attribute is missing */
table:not([cellpadding]) th,
table:not([cellpadding]) td {
  padding: 0.4rem;
}
/* Set default table styles if a table has a positive border attribute
     and no inline css */
table[border]:not([border='0']):not([style*='border-width']) th,
table[border]:not([border='0']):not([style*='border-width']) td {
  border-width: 1px;
}
/* Set default table styles if a table has a positive border attribute
     and no inline css */
table[border]:not([border='0']):not([style*='border-style']) th,
table[border]:not([border='0']):not([style*='border-style']) td {
  border-style: solid;
}
/* Set default table styles if a table has a positive border attribute
     and no inline css */
table[border]:not([border='0']):not([style*='border-color']) th,
table[border]:not([border='0']):not([style*='border-color']) td {
  border-color: #ccc;
}
figure figcaption {
  color: #999;
  margin-top: 0.25rem;
  text-align: center;
}
hr {
  border-color: #ccc;
  border-style: solid;
  border-width: 1px 0 0 0;
}
.mce-content-body:not([dir='rtl']) blockquote {
  border-left: 2px solid #ccc;
  margin-left: 1.5rem;
  padding-left: 1rem;
}
.mce-content-body[dir='rtl'] blockquote {
  border-right: 2px solid #ccc;
  margin-right: 1.5rem;
  padding-right: 1rem;
}

`
const config = {
  language: 'pt_BR',
  statusbar: false,
  height: 1000,
  menubar: true,
  branding: false,
  content_css: false,
  content_style:
    contentCss +
    '\n' +
    'body { font-family:"Arial";padding-top:3cm;padding-left:3cm;padding-right:2cm;padding-bottom:2cm;}body p{line-height:1.5em}',
  pagebreak_separator:
    '<span class="page-break" style="page-break-before: always;"></span>',
  fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',

  pagebreak_split_block: true,
  autosave_ask_before_unload: true,
  contextmenu: false,
  paste_retain_style_properties: 'color font-size forecolor backcolor',

  plugins: [
    'paste quickbars textpattern autosave advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks fullscreen',
    'insertdatetime media table paste wordcount pagebreak fullpage',
    'myCustomToolbarButton mybutton',
  ],
  menu: {
    file: {
      title: 'File',
      items: 'preview | print ',
    },
    edit: {
      title: 'Edit',
      items: 'undo redo | cut copy paste | selectall | searchreplace',
    },
    view: {
      title: 'View',
      items: 'code | visualaid visualchars | spellchecker | preview fullscreen',
    },
    insert: {
      title: 'Insert',
      items:
        'mybutton myCustomToolbarButton | image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime',
    },
    format: {
      title: 'Format',
      items:
        'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat',
    },
    tools: {
      title: 'Tools',
      items: 'spellchecker spellcheckerlanguage | code wordcount',
    },
    table: {
      title: 'Table',
      items: 'inserttable | cell row column | tableprops deletetable',
    },
    // peticao: { title: 'Petição', items: '' },
  },
  textpattern_patterns: [
    { start: '*', end: '*', format: 'italic' },
    { start: '**', end: '**', format: 'bold' },
    { start: '#', format: 'h1' },
    { start: '##', format: 'h2' },
    { start: '###', format: 'h3' },
    { start: '####', format: 'h4' },
    { start: '#####', format: 'h5' },
    { start: '######', format: 'h6' },
    { start: '1. ', cmd: 'InsertOrderedList' },
    { start: '* ', cmd: 'InsertUnorderedList' },
    { start: '- ', cmd: 'InsertUnorderedList' },
    { start: '//brb', replacement: 'Be Right Back' },
  ],

  // toolbar:'undo redo print | styleselect | fontselect fontsizeselect bold italics underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify |lineheight | numlist bullist indent outdent | removeformat | myCustomToolbarButton | mybutton',
  toolbar:
    ' fullscreen  preview print | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | insertfile image media template link anchor codesample ',

  toolbar_mode: 'sliding',
  // quickbars_selection_toolbar: false

  quickbars_insert_toolbar: false,
  quickbars_selection_toolbar:
    'forecolor backcolor | bold italic | fontsizeselect| paste pastetext',

  setup() {
    // Here we can add plugin
    window.tinymce.PluginManager.add('myCustomToolbarButton', cuPlugin)
    window.tinymce.PluginManager.add('mybutton', customPlugin)
  },
}

export default { config }
