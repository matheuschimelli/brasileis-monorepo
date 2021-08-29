<template>
  <v-app>
    <v-main class="mb-16 backgroundGray">
      <nuxt />
    </v-main>
  </v-app>
</template>

<style scoped>
.backgroundGray {
  background: #b3b3b308;
}
a {
  color: #373737;
  font-weight: 500;
  text-decoration: none;
}
.header-logo {
  margin: 5px;
}
.logo {
  font-family: 'Khula', sans-serif !important;
  color: #b82f00;
  font-size: 1.7em;
  text-transform: uppercase;
}
.navBar {
  border-bottom: 1px solid #ddd !important;
}
.searchBtn {
  bottom: 4px !important;
  top: -2px !important;
}
</style>
