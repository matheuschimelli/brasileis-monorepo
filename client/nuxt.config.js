import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
export default {
  publicRuntimeConfig: {
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:8080/api/v1',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ' + 'Brasileis',
    title: 'Legislação centralizada e organizada',

    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'google', content: 'notranslate' },
      { name: 'Content-Language', content: 'pt-br' },
      {
        name: 'viewport',
        content:
          'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Centralizamos e organizamos legislação municipal, estadual e federal.',
      },
      {
        hid: 'description',
        name: 'keywords',
        content:
          'brasileis, brasil leis, direito, legislação, advocacia, brasileis, jurisprudência, decretos, noticias jurídicas, matérias jurídicas',
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      // Add to homescreen for Chrome on Android. Fallback for PWA (handled by nuxt)
      {
        name: 'application-name',
        content: 'Brasileis',
      },
      {
        property: 'og:type',
        content: `website`,
      },
      {
        property: 'og:url',
        content: 'https://brasileis.com.br/',
      },
      {
        property: 'og:title',
        content: 'Brasileis - Legislação Centralizada ',
      },
      {
        property: 'og:description',
        content:
          'Centralizamos e organizamos legislação municipal, estadual e federal.',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://brasileis.com.br/',
      },
      {
        property: 'twitter:title',
        content: 'Brasileis - Legislação Centralizada ',
      },
      {
        property: 'twitter:description',
        content:
          'Centralizamos e organizamos legislação municipal, estadual e federal.',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://www.brasileis.com.br' },

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: '/https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=IBM+Plex+Serif:ital,wght@0,400;1,500&display=swap',
      },
    ],
  },

  css: ['@/assets/variables.scss', '@/assets/global.scss'],

  plugins: [
    '~/plugins/jsonld',
    '~/plugins/apollo-config.js',
    '@/plugins/apollo/plugin.ts',
  ],

  components: false,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    ['@nuxtjs/google-analytics'],
    ['@nuxt/typescript-build'],
    ['@nuxtjs/tailwindcss'],
  ],
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/pwa'],
    ['@nuxtjs/amp'],
    ['@nuxtjs/apollo'],
    ['@nuxtjs/sitemap'],
    ['@nuxtjs/robots'],
    ['@nuxtjs/auth-next'],
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  vuetify: {
    treeShake: true,
  },

  amp: {
    origin: process.env.CLIENT_URL,
  },
  googleAnalytics: {
    id: 'UA-171057997-1',
  },
  pwa: {
    manifest: {
      name: 'Brasileis',
      short_name: 'Brasileis',
      start_url: `brasileis.com.br`,
      display: 'standalone',
      background_color: '#FFF',
      description:
        'Centralizamos e organizamos legislação municipal, estadual e federal.',
      theme_color: '#FFF',
    },

    meta: {
      ogHost: 'https://brasileis.com.br',
      twitterCard: 'summary_large_image',
      description:
        'Centralizamos e organizamos legislação municipal, estadual e federal.',
      theme_color: '#FFF',
    },
  },
  sitemap: {
    hostname: 'https://brasileis.com.br',
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: 'https://brasileis.com.br/sitemap.xml',
  },

  axios: {
    baseURL: process.env.SERVER_URL,
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },

  auth: {
    strategies: {
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: `${process.env.SERVER_URL}/user/verify`,
          userInfo: `${process.env.SERVER_URL}/user`, // 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: `${process.env.CLIENT_URL}/logout`,
        },
        token: {
          property: 'id_token',
          type: 'Bearer',
          maxAge: 60 * 60 * 24 * 30,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: 'offline',
        redirectUri: undefined, // 'http://localhost:3000/auth/verify',
        logoutRedirectUri: '/',
        clientId:
          '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      },
    },
  },

  build: {
    transpile: ['@vue/apollo-composable'],
  },
}
// apollo: {
//   // Sets up the apollo client endpoints
//   clientConfigs: {
//     // recommended: use a file to declare the client configuration (see below for example)
//     // default: '~/plugins/my-alternative-apollo-config.js',

//     // you can setup multiple clients with arbitrary names
//     alternativeClient: {
//       // required
//       httpEndpoint: process.env.SERVER_URL,

//       // override HTTP endpoint in browser only
//       browserHttpEndpoint: '/graphql',

//       // See https://www.apollographql.com/docs/link/links/http.html#options
//       httpLinkOptions: {
//         credentials: 'same-origin',
//       },

//       // You can use `wss` for secure connection (recommended in production)
//       // Use `null` to disable subscriptions
//       wsEndpoint: `${process.env.GRAPHQL_SERVER_URL}/graphql`,

//       // LocalStorage token
//       tokenName: 'apollo-token',

//       // Enable Automatic Query persisting with Apollo Engine
//       persisting: false,

//       // Use websockets for everything (no HTTP)
//       // You need to pass a `wsEndpoint` for this to work
//       websocketsOnly: false,
//     },
//   },

//   /**
//    * default 'apollo' definition
//    */
//   defaultOptions: {
//     // See 'apollo' definition
//     // For example: default query options
//     $query: {
//       loadingKey: 'loading',
//       fetchPolicy: 'cache-and-network',
//     },
//   },

//   // Sets the authentication type for any authorized request.
//   authenticationType: 'Bearer',

//   // Token name for the cookie which will be set in case of authentication
//   tokenName: 'apollo-token',

//   // [deprecated] Enable the graphql-tag/loader to parse *.gql/*.graphql files
//   includeNodeModules: true,
// },

// Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)

// Build Configuration (https://go.nuxtjs.dev/config-build)
