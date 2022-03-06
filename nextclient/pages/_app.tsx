import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";
import { DefaultSeo } from "next-seo";
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

type MyAppProps = {
  Component: any, pageProps: any
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter()

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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

      <ChakraProvider>
        <ProvideAuth>
          <Component {...pageProps} />
        </ProvideAuth>
      </ChakraProvider>

    </>
  );
}
