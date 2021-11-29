import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";
import { DefaultSeo } from "next-seo";

//@ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Brasileis"
        description="Legislação centralizada e organizada em um único lugar."
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://brasileis.com.br",
        }}
        canonical="https://brasileis.com.br"
      />
      <ProvideAuth>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ProvideAuth>
    </>
  );
}
export default MyApp;
