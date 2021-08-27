import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

import GuestNavbar from "./GuestNavbar";
import AuthNavbar from "./AuthNavbar";

/* <button onClick={() => signIn()} type="button">
Sign in
</button>
<p className="text-sm text-gray-400">
Faça login com sua conta do Google. Ao fazer Login você aceita
nossos termos de uso e política de privacidade.
</p> */

const NavBar: React.FC = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          <GuestNavbar />
        </>
      )}
      {session && (
        <>
          <AuthNavbar session={session} />
        </>
      )}
    </>
  );
};

export default NavBar;
