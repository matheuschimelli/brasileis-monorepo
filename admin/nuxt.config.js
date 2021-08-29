// import dotenv from 'dotenv'
// dotenv.config({ path: '.env' })

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8080/api'
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000'

export default {
  publicRuntimeConfig: {
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:8080/api',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  },
  ssr: false,

  target: 'static',

  head: {
    titleTemplate: 'Painel de Administração Brasileis',
    htmlAttrs: {
      lang: 'pt-br',
    },
    title: 'Painel de Administração Brasileis',
    meta: [
      {
        charset: 'utf-8',
      },
      { name: 'google', content: 'notranslate' },
      {
        name: 'viewport',
        content:
          'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1',
      },
      {
        itemprop: 'name',
        content: ` 'Adminstração Brasileis'`,
      },
      {
        itemprop: 'description',
        content: 'Adminstração Brasileis',
      },
    ],
  },

  loadingIndicator: {
    name: 'pulse',
    color: '#295092',
    background: '#fff',
  },
  pageTransition: {
    name: 'intro',
    mode: 'out-in',
  },
  css: [],

  plugins: [
    { src: '~/plugins/CKEditor', mode: 'client' },
    '@/plugins/apollo/plugin.ts',
    { src: '~/plugins/apollo-config.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/apollo',
  ],

  pwa: {
    meta: {
      theme_color: '#f4f4f6',
    },
    manifest: {
      name: 'PA Brasileis',
      short_name: 'PA Brasileis',
      description: 'PA Brasileis',
      start_url: '/',
      background_color: '#f4f4f6',
      theme_color: '#b82f00',
      lang: 'pt-br',
    },
  },

  axios: {
    baseURL: SERVER_URL,
  },

  /*
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: GRAPHQL_API,
      },
    },
    defaultOptions: {
      authenticationType: 'Bearer',
      tokenName: 'auth._token.social',
    },
  },
  */

  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration (see below for example)
      default: '~/plugins/apollo-config.js',
    },
  },
  /*
  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration (see below for example)
      default: '~/plugins/apollo-config.js',

      // you can setup multiple clients with arbitrary names
      alternativeClient: {
        httpEndpoint: 'http://localhost:4000',
        browserHttpEndpoint: '/graphql',
        httpLinkOptions: {
          credentials: 'same-origin',
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: 'ws://localhost:4000',
        tokenName: 'apollo-token',
        persisting: false,
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false,
      },
    },

    authenticationType: 'Bearer',
    tokenName: 'apollo-token',
    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
  },
  */

  auth: {
    strategies: {
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: `${SERVER_URL}/v1/user/verify`,
          userInfo: `${SERVER_URL}/v1/user`, // 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: `${CLIENT_URL}/logout`,
        },
        token: {
          property: 'id_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: 'offline',
        redirectUri: undefined, // 'http://localhost:3000/auth/verify',
        logoutRedirectUri: undefined,
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
  // transpile: [/@vue[\\/]composition-api/],
}
