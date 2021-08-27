/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const fetchUserFromServer = async (user: any) => {
  // eslint-disable-next-line no-undef
  const res = await fetch('http://localhost:8080/api/v1/user/verify', {
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
  // eslint-disable-next-line no-undef
  const res = await fetch('http://localhost:8080/api/v1/user', {
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
// Providers.Google({
//   clientId: '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
//   clientSecret: 'STUPL8t7IL_SOTOoClj5hXUf',
//   idToken: true,
//   authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
//   // id: 'google',
//   // name: 'Google',
//   // type: 'oauth',
//   // version: '2.0',
//   scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
//   // params: { grant_type: 'authorization_code' },
//   // accessTokenUrl: 'http://localhost:8080/api/v1/user/verify',
//   // requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth',
//   // profileUrl: 'http://localhost:8080/api/v1/user', // https://www.googleapis.com/oauth2/v1/userinfo?alt=json
//   // authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=code',
// }),

export default NextAuth({
  debug: true,
  providers: [
    Providers.Google({
      clientId: '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
      // clientSecret: 'STUPL8t7IL_SOTOoClj5hXUf',

    }),

  ],

  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        // console.log(`PROFILE ${JSON.stringify(profile)}`);

        // console.log(`ACCOUNT ${JSON.stringify(account)}`);

        // console.log('running callback');
        // console.log(account);

        user.accessToken = await fetchUserFromServer({ account, profile, user });
        return true;
      }

      return false;
    },
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

// export default NextAuth({
//   debug: true,
//   providers: [
//     {
//       id: 'google',
//       name: 'Google',
//       type: 'oauth',
//       version: '2.0',
//       scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
//       params: { grant_type: 'authorization_code' },
//       accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
//       requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth',
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=token', // or code
//       profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
//       // @ts-ignore
//       async profile(profile, tokens) {
//         // You can use the tokens, in case you want to fetch more profile information
//         // For example several OAuth providers do not return email by default.
//         // Depending on your provider, will have tokens like
//         // `access_token`, `id_token` and or `refresh_token`
//         return {
//           id: profile.id,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//       clientId: '333116093929-juqamijpbup7ju9eutj2c3ir9mrmfsvt.apps.googleusercontent.com',
//       state: true,
//     },
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       if (account.provider === 'google') {
//         //   console.log(`PROFILE ${JSON.stringify(profile)}`);

//         // console.log(`ACCOUNT ${JSON.stringify(account)}`);

//         // console.log('running callback');
//         // console.log(account);

//         user.accessToken = await fetchUserFromServer(account);
//         return true;
//       }

//       return false;
//     },
//     async jwt(token, user) {
//       if (user) {
//         token = { accessToken: user.accessToken };
//         // console.log(`user token ${token}`);
//       }
//       //  console.log(`normal token ${token}`);

//       return token;
//     },
//     async session(session, token) {
//       session.accessToken = token.accessToken;
//       console.log('user session', session);
//       console.log('TOKEN', token);
//       session.user = await getUserFromTheAPIServer(token.accessToken as string);

//       return session;
//     },
//   },
// });
