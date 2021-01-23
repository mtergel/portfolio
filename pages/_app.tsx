import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import myTheme from "../styles/theme";
import fonts from "../styles/font-face";

import { AppProps } from "next/app";
import Head from "next/head";

const theme = extendTheme(myTheme);

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Global styles={fonts} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
