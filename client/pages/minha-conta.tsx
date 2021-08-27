import React from "react";
import { useSession } from "next-auth/client";

import Defaultlayout from "../components/layouts/DefaultLayout";
import Content from "../components/layouts/Content";
import AccountDetails from "../components/Account/AccountDetails";

const MinhaConta = () => {
  const [session, loading] = useSession();

  if (loading) return null;

  if (!loading && !session)
    return <p>Você precisa estar logado para acessar sua conta</p>;

  return (
    <Defaultlayout>
      {session!! && (
        <Content>
          <AccountDetails user={session?.user} />
        </Content>
      )}
    </Defaultlayout>
  );
};
export default MinhaConta;
