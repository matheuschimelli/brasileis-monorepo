const customPlugin = function (editor) {
  editor.ui.registry.addMenuItem('mybutton', {
    text: 'Petição',

    getSubmenuItems() {
      return [
        {
          type: 'menuitem',
          text: 'Inserir cabeçalho',
          onAction() {
            editor.insertContent(
              '<b>EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ____ VARA ____ DA COMARCA DE ___ DO ESTADO DO ___</b>'
            )
          },
        },
        {
          type: 'menuitem',
          text: 'Menu item 2',
          onAction() {
            editor.insertContent('&nbsp;<em>You clicked menu item 2!</em>')
          },
        },
      ]
    },
  })
}

export default customPlugin
