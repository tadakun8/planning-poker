import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../firebase";
import { getApp, FirebaseApp } from "firebase/app";

function MyApp({ Component, pageProps }: AppProps) {
  const app: FirebaseApp = getApp();

  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ul>
        <li>name = {app.name}</li>
      </ul>
    </ChakraProvider>
  );
}

export default MyApp;
