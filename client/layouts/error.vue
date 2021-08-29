<template>
  <v-app>
    <v-main class="backgroundGray">
      <div class="center">
        <v-img src="not-found.svg" width="500" />
        <h1 v-if="error.statusCode === 404" class="errorText">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <NuxtLink to="/"> Voltar para home </NuxtLink>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Ops. Página não encontrada.',
      otherError:
        'Ops. A página não pode ser exibina no momento. Tente mais tarde.',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.backgroundGray {
  background: #b3b3b308;
}
.center {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
}
a {
  text-decoration: none;
  color: #b82f00;
  font-weight: 600;
}
.errorText {
  max-width: 500px;
  text-align: center;
}
</style>
