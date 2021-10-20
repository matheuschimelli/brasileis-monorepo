import { ChakraProvider } from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";
//@ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  );
}
export default MyApp;
