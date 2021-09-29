<template>
  <v-container>
    <section class="text-gray-600 body-font sm:mt-10">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-24
          md:flex-row
          flex-col
          items-center
        "
      >
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            items-start
            text-left
            mb-16
            md:mb-0
            mt-5
          "
        >
          <h1
            class="
              title-font
              uppercase
              font-extrabold
              leading-tight
              text-4xl
              md:text-5xl
              lg:text-5xl
              mb-4
              text-gray-900 text-left
            "
          >
            Legislação

            <span
              class="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-blue-500
                to-blue-900
              "
            >
              centralizada
            </span>
            e
            <span
              class="
                text-transparent
                bg-clip-text bg-gradient-to-r
                from-blue-500
                to-blue-900
              "
              >organizada
            </span>
            em um só lugar
          </h1>
          <br />
          <p className="mb-8 leading-relaxed">
            O Brasileis centraliza leis, jurisprudências e diários oficiais em
            um único lugar, e você pode organizar seu próprio feed e uma
            biblioteca para se manter sempre atualizado.
          </p>
          <div>
            <v-btn depressed color="#1d4ed8" dark class="mt-10 sm:mt-2"
              >Criar uma conta</v-btn
            >
            <!-- <v-btn depressed color="#1d4ed8" outlined class="mt-10 sm:mt-2"
              >Saiba mais</v-btn
            > -->
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font md:mt-40 lg:mt-40">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-2
              text-gray-900
            "
          >
            Como o Brasileis funciona
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Capturamos automaticamente das fontes oficiais leis, diários
            oficiais e jurisprudências reunindo tudo em um sistema de busca
            simplificado e otimizado para pesquisa jurídica
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <Card
            title="Atualizações automáticas"
            description="Verificamos diariamente de forma automática as atualizações direto das fontes oficiais."
            link="asdasd"
            icon="mdi-web-clock"
          />
          <Card
            title="Legislação centralizada"
            description="Tudo¹ o que você procura e precisa em um sistema de busca simplificado e otimizado para busca legislativa."
            link="asdasd"
            icon="mdi-file-search-outline"
          />
          <Card
            title="Pesquise em qualquer lugar"
            description="Interface de usuário otimizada para uso em qualquer dispositivo com navegador e conexão com internet."
            link="asdasd"
            icon="mdi-responsive"
          />
          <Card
            title="Referencias legais (Em breve)"
            description="Veja todas as leis relacionadas a uma jurisprudência, ou todas juridprudências relacionadas a uma lei"
            link="asdasd"
            icon="mdi-link-variant"
          />
          <Card
            title="Feed de leis"
            description="Siga tópicos que são do seu interesse e receba diariamente atualizações legais do tema"
            link="asdasd"
            icon="mdi-rss"
          />

          <Card
            title="Anote e organize sua biblioteca"
            description="Crie uma biblioteca pessoal com anotações de leis e tópicos que você mais usa"
            link="asdasd"
            icon="mdi-library-shelves"
          />
        </div>
        <div class="flex justify-center content-center mt-10">
          <v-btn depressed large color="#1d4ed8" dark to="/login">
            Crie uma conta agora mesmo
          </v-btn>
        </div>

        <!-- <p
          class="
            flex
            justify-center
            content-center
            mt-10
            leading-relaxed
            text-gray-500 text-sm
          "
        >
          Observações: ¹. No momento o termo tudo se limita
        </p> -->
      </div>
    </section>
  </v-container>
</template>

<script lang="ts">
import Card from '@/components/LandingIndex/Card.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    Card,
  },
  middleware: ['notAuthenticated'],
  head: {
    title: 'Brasileis - Legislação centralizada e organizada',
    titleTemplate: '',
    htmlAttrs: {
      lang: 'pt-br',
    },
  },
})
</script>
