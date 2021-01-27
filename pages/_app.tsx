import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import fonts from "../styles/font-face";

import { AppProps } from "next/app";
import Head from "next/head";

const theme = extendTheme({
  fonts: {
    heading: "'Julius Sans One', sans-serif",
    body: "'Poppins', sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    background: "#1C2B35",
    primary: {
      alt: "#FFB5B2",
      main: "#FF9E97",
      light: "#FEDFDD",
    },
    secondary: "#2F4858",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        subheader: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        letterSpacing: "2px",
        lineHeight: "1.125",
        justifyContent: "space-between",
        borderRadius: "none",
        textTransform: "uppercase",
      },
      variants: {
        more: (props) => ({
          bg: props.theme.colors.primary.main,
          fontSize: "0.75rem",
          width: "376px",
          height: "96px",
          padding: "42px 40px 36px",
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.theme.colors.background,
        color: props.theme.colors.white,
      },
    }),
  },
});

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
