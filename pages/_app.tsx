import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import fonts from "../styles/font-face";

import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../components/layout/Layout.module.css";
import "../styles/styles.css";

const theme = extendTheme({
  fonts: {
    heading: "'Julius Sans One', sans-serif",
    body: "'Poppins', sans-serif",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    background: "#1a1a1d",
    primary: {
      alt: "#FFB5B2",
      main: "#C3073F",
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
      baseStyle: {},
      variants: {
        more: (props) => ({
          bg: "#3A4657",
          fontSize: "0.75rem",
          width: "376px",
          height: "96px",
          padding: "42px 40px 36px",
          fontWeight: "bold",
          letterSpacing: "2px",
          lineHeight: "1.125",
          justifyContent: "space-between",
          borderRadius: "none",
          textTransform: "uppercase",
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

const blackBox = {
  initial: {
    width: "100%",
    right: 0,
  },
  animate: {
    width: 0,
    transition: {
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  exit: {
    width: "100%",
    right: "auto",
    left: 0,
    transition: {
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Global styles={fonts} />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route}>
            <motion.div
              className={styles.blackbox}
              variants={blackBox}
              initial="initial"
              animate="animate"
              exit="exit"
            />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}
