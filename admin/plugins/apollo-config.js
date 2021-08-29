const GRAPHQL_API = 'http://localhost:8080/graphql' // 'https://api.brasileis.com.br/graphql'

export default (context) => {
  return {
    httpEndpoint: GRAPHQL_API,

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () => window.localStorage.getItem('auth._token.social'),
  }
}
