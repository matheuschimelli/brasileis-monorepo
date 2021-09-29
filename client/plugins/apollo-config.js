const GRAPHQL_API = 'http://localhost:8080/graphql' // 'https://api.brasileis.com.br/graphql'
// 'https://api.brasileis.com.br/graphql' //
function getCookie(cookieName, stringCookie) {
  const strCookie = new RegExp('' + cookieName + '[^;]+')

  const finalStrCookie = strCookie.exec(stringCookie)

  if (finalStrCookie) {
    const finalStrCookieWhat = finalStrCookie[0]

    if (finalStrCookieWhat) {
      return unescape(
        finalStrCookieWhat
          ? finalStrCookieWhat.toString().replace(/^[^=]+./, '')
          : ''
      )
    } else {
      return null
    }
  }
}
export default ({ req }) => {
  if (req && req.headers && req.headers.cookie) {
    console.log('req headers', req.headers.cookie)
    const accessToken = getCookie('auth._token.social', req.headers.cookie)

    if (accessToken) {
      return {
        httpEndpoint: GRAPHQL_API,

        /*
         * For permanent authentication provide `getAuth` function.
         * The string returned will be used in all requests as authorization header
         */
        getAuth: () => accessToken,
      }
    }
    return {
      httpEndpoint: GRAPHQL_API,

      /*
       * For permanent authentication provide `getAuth` function.
       * The string returned will be used in all requests as authorization header
       */
      // getAuth: () => window.localStorage.getItem('auth._token.social'),
    }
  }
  return {
    httpEndpoint: GRAPHQL_API,

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () => window.localStorage.getItem('auth._token.social'),
  }
}
