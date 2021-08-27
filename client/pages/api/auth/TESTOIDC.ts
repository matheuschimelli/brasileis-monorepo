/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const fetchUserFromServer = async (user: any) => {
  console.log('CALLING TOKNE VERIFICATION');
  // eslint-disable-next-line no-undef
  const res = await fetch('http://localhost:8080/test/verifytoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  });
  console.log(res.status);
  const result = await res.json();
  console.log(result);

  return result.id_token;
};

const getUserFromTheAPIServer = async (token: string) => {
  console.log('GETTING USER FROM API SERVER');
  // eslint-disable-next-line no-undef
  const res = await fetch('http://localhost:8080/test/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.status);
  const result = await res.json();
  console.log(result);

  return result;
};

//   clientId: '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
//   clientSecret: 'STUPL8t7IL_SOTOoClj5hXUf',

export default NextAuth({
  debug: true,
  providers: [
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      version: '2.0',
      scope: 'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
      params: { grant_type: 'authorization_code' },

      accessTokenUrl: 'http://localhost:8080/test/verifytoken', // send to server | https://accounts.google.com/o/oauth2/token | https://oauth2.googleapis.com/token

      requestTokenUrl: 'http://localhost:8080/test/verifytoken', // 'https://accounts.google.com/o/oauth2/auth',

      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=code', // code or token

      profileUrl: 'http://localhost:8080/test/profile', // should be replaced with own server https://www.googleapis.com/oauth2/v1/userinfo?alt=json

      clientId: '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
      // clientSecret: 'STUPL8t7IL_SOTOoClj5hXUf',
      protection: 'state',
      debug: true,
      idToken: true,
      // @ts-ignore
      async profile(profile, tokens) {
        console.log('RETURNING PROFILE', profile);
        console.log('RETURNING TOKENS', tokens);
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth providers do not return email by default.
        // Depending on your provider, will have tokens like
        // `access_token`, `id_token` and or `refresh_token`
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  callbacks: {
    // async signIn(user, account, profile) {
    //   if (account.provider === 'google') {
    //     console.log('USER', user);
    //     console.log('ACCOUNT', account);
    //     console.log('PROFILE', profile);

    //     user.accessToken = await fetchUserFromServer(account);
    //     return true;
    //   }

    //   return false;
    // },
    async jwt(token, user) {
      if (user) {
        token = { accessToken: user.accessToken };
        // console.log(`user token ${token}`);
      }
      //  console.log(`normal token ${token}`);

      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      console.log('user session', session);
      console.log('TOKEN', token);
      session.user = await getUserFromTheAPIServer(token.accessToken as string);

      return session;
    },
  },
});
