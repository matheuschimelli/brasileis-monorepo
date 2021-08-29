<template>
  <v-app>
    <v-main class="app">
      <v-container>
        <LandingHeader />
        <nuxt />
      </v-container>
      <LandingFooter />
    </v-main>
  </v-app>
</template>
<script>
import LandingHeader from '@/components/Headers/LandingHeader'
import LandingFooter from '@/components/Footers/LandingFooter'

export default {
  components: {
    LandingHeader,
    LandingFooter,
  },
}
</script>
