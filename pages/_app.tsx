import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../styles/Fonts";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../components/layout/Layout.module.css";
import "../styles/fullPage.scss";

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
          bg: props.theme.colors.primary.main,
          fontSize: "0.75rem",
          width: ["256px", "256px", "320px"],
          height: ["76px", "76px", "96px"],
          padding: ["18px 20px", "18px 20px", "36px 40px"],
          fontWeight: "bold",
          letterSpacing: "2px",
          lineHeight: "1.125",
          justifyContent: "space-between",
          borderRadius: "none",
          textTransform: "uppercase",
        }),
        square: (props) => ({
          bg: "transparent",
          fontWeight: "bold",
          fontSize: "13px",
          border: `1px solid #FFFFFF`,
          lineHeight: 1.25,
          textTransform: "uppercase",
          letterSpacing: "2.24px",
          width: "100%",
          padding: "12px",
          borderRadius: 0,
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
  shadows: {
    outline: "0 0 0 3px #C3073F",
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
        <title>Tergel Munkhdelger</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        {/* <Fonts /> */}
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
