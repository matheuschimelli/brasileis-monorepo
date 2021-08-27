/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const getAccessToken = async (user: any) => {
  const res = await fetch(process.env.GET_ACCESS_TOKEN!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  });
  const result = await res.json();
  return result.auth_token;
};

const getUserFromTheAPIServer = async (token: string) => {
  const res = await fetch(process.env.GET_USER_API!, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  const result = await res.json();
  return result;
};

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        try {
          const accessToken = await await getAccessToken({ account, profile, user });
          console.log(accessToken)
          user.accessToken = accessToken;

          return true;
        } catch (error) {
          return false
        }
      }
      return false;
    },
    async jwt(token, user) {
      if (user) {
        console.log('USER ACCESS TOKEn', user.accessToken)
        token.accessToken = user.accessToken
      };
      return token;
    },
    async session(session, token) {
      try {

        const authenticatedUser = await getUserFromTheAPIServer(token.accessToken as string);
        console.log('AUTH USER', authenticatedUser)
        session.user = authenticatedUser
        session.accessToken = token.accessToken;

        console.log('user session', session);
        return session;
      } catch (error) {
        throw new Error("Não foi possível fazer login")
      }

    },
  },
});
