<template>
  <footer>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4">
          <b>Notícias</b>
          <br />
          <li><a href="link">Contato</a></li>
          <li><a href="link">Assinatura</a></li>
          <li><a href="link">Pesquisa</a></li>
          <li><a href="link">Anunciar</a></li>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <b>Legislação</b>
          <br />
          <li><a href="link">Contato</a></li>
          <li><a href="link">Assinatura</a></li>
          <li><a href="link">Pesquisa</a></li>
          <li><a href="link">Anunciar</a></li>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4">
          <b>Sobre</b>
          <br />
          <li><a href="link">Contato</a></li>
          <li><a href="link">Assinatura</a></li>
          <li><a href="link">Pesquisa</a></li>
          <li><a href="link">Anunciar</a></li>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #000;
  color: #fff;
  position: absolute;
  bottom: 0;
  line-height: 2em;

  li {
    list-style-type: none;
    line-height: 2em;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-size: 16px;
  }
  .columnTitle {
    font-style: italic;
    font-family: 'IBM Plex Serif', serif;
    font-size: 1.5em;
    line-height: 2em;
  }
}
.linksColumn {
  padding: 20px;
}
.logoColumn {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  span {
    font-weight: bold;
    color: #b82f00;
    font-size: 2em;
  }
}
</style>
