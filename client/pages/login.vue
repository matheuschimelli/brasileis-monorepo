<template>
  <v-container>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Fazer login no Brasileis
          </h1>
          <p class="leading-relaxed mt-4">
            Faça login ou crie uma conta para aproveitar o que tudo o que o
            Brasileis tem a oferecer.
          </p>
        </div>
        <div
          class="
            lg:w-2/6
            md:w-1/2
            bg-gray-100
            rounded-lg
            p-8
            flex flex-col
            md:ml-auto
            w-full
            mt-10
            md:mt-0
          "
        >
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Entrar
          </h2>

          <GoogleLoginBtn />
          <p class="text-xs text-gray-500 mt-3">
            Ao fazer login você aceita nossas políticas de uso e de privacidade,
            além disso você está concordando com o compartilhamento de dados do
            Google com o Brasileis.
          </p>
        </div>
      </div>
    </section>
  </v-container>
</template>
<script>
import GoogleLoginBtn from '@/components/GoogleLoginBtn'
export default {
  components: {
    GoogleLoginBtn,
  },
  head() {
    return {
      title: 'Fazer login',
    }
  },
}
</script>
