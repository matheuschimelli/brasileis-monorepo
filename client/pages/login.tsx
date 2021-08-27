import React from "react";

/* eslint-disable no-unused-vars */
import { signIn, signOut, useSession } from "next-auth/client";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <DefaultLayout>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 h-96 flex flex-col sm:flex-row justify-around">
            <div className="p-4 w">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Fazer login</span>
              </h1>
            </div>
            <div className="p-4 content-center bg-gray-100 rounded-t-lg">
              <div>
                {!session && (
                  <>
                    <button onClick={() => signIn()} type="button">
                      Sign in
                    </button>
                    <p className="text-sm text-gray-400">
                      Faça login com sua conta do Google. Ao fazer Login você
                      aceita nossos termos de uso e política de privacidade.
                    </p>
                  </>
                )}
                {session && (
                  <>
                    Signed in as {session.user!.email} <br />
                    <button onClick={() => signOut()} type="button">
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
