import { Container } from "../common";
import { useSpring, animated } from "react-spring";
import { Box, Text, Button } from "@chakra-ui/react";
import styles from "../../styles/moon.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Spring } from "react-spring/renderprops";

const textBoxVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

const textBoxButtons = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

const About: React.FC<{ active: boolean }> = ({ active }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 120}px,${y / 8 - 120}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 160}px,${y / 6 + 40}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 12}px,${y / 10 - 235}px,0)`;
  const trans5 = (x, y) => `translate3d(${x / 3.5 + 135}px,${y / 6 + 115}px,0)`;
  const trans7 = (x, y) => `translate3d(${x / 9 - 4}px,${y / 10 + 275}px,0)`;
  const trans6 = (x, y) => `translate3d(${x / 10 + 185}px,${y / 10 + 275}px,0)`;
  const trans8 = (x, y) => `translate3d(${x / 10 - 185}px,${y / 10 + 275}px,0)`;

  return (
    <div className="section">
      <Container>
        <AnimatePresence>
          {active && (
            <Box
              display="flex"
              height="100%"
              width="100%"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <motion.div
                variants={textBoxVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={styles.framerContainer}
              >
                <Box
                  height="100%"
                  width="100%"
                  border="1px solid"
                  py={["1.875rem", "3.75rem"]}
                  px={["2rem", "4.375rem"]}
                  display="flex"
                  flexDir="column"
                >
                  <Box
                    flexGrow={1}
                    overflow="hidden"
                    mb={4}
                    textOverflow="ellipsis"
                  >
                    <Text
                      mb={3}
                      fontWeight={500}
                      fontSize={["22px", "25px", "28px"]}
                    >
                      Introduction
                    </Text>
                    <Text fontSize={["14px", "15px", "16px"]}>
                      My name is Tergel Munkhdelger, and I’m a 23-year-old Front
                      End Developer based in Mongolia. I like creating simple,
                      user-friendly websites. Aside from my job, I like learning
                      about web/mobile designs. In my free time, you can find me
                      playing my guitar, making instrumentals and petting all
                      the good dogs.
                    </Text>
                    <Text mt={"16px"}>
                      Tergel means the 15th day of the lunar month or Full moon.
                    </Text>
                  </Box>
                  <motion.div
                    variants={textBoxButtons}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDir={["column", "column", "row"]}
                      marginTop="auto"
                      width="100%"
                    >
                      <Link href="/about">
                        <Button
                          variant="square"
                          mr={[0, 0, 4, 8]}
                          mb={[4, 4, 0]}
                          _hover={{
                            color: "black",
                            _after: {
                              height: "100%",
                            },
                          }}
                          _active={{
                            _after: {
                              height: "100%",
                            },
                          }}
                          _after={{
                            content: "''",
                            position: "absolute",
                            zIndex: -1,
                            transition: "height 0.33s",
                            width: "100%",
                            height: 0,
                            top: 0,
                            left: 0,
                            backgroundColor: "#FFFFFF",
                          }}
                        >
                          SEE MORE
                        </Button>
                      </Link>

                      <Button
                        variant="square"
                        _hover={{
                          color: "black",
                          _after: {
                            height: "100%",
                          },
                        }}
                        _active={{
                          _after: {
                            height: "100%",
                          },
                        }}
                        _after={{
                          content: "''",
                          position: "absolute",
                          zIndex: -1,
                          transition: "height 0.33s",
                          width: "100%",
                          height: 0,
                          top: 0,
                          left: 0,
                          backgroundColor: "white",
                        }}
                      >
                        RESUME
                      </Button>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>

              <Box flexGrow={1} zIndex={1}>
                <motion.div
                  initial={{
                    x: 50,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                      type: "spring",
                      stiffness: 550,
                      damping: 140,
                      duration: 0.6,
                    },
                  }}
                  exit={{
                    x: 50,
                    opacity: 0,
                  }}
                  className={styles.container}
                >
                  <animated.div
                    className={styles.card1}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans1) }}
                  />
                  <animated.div
                    className={styles.card2}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans2) }}
                  />
                  <animated.div
                    className={styles.card3}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans3) }}
                  />
                  <animated.div
                    className={styles.card4}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans4) }}
                  />
                  <animated.div
                    className={styles.card5}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans5) }}
                  />
                  <animated.div
                    className={styles.card6}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans6) }}
                  />
                  <animated.div
                    className={styles.card7}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans7) }}
                  />
                  <animated.div
                    className={styles.card8}
                    //@ts-ignore
                    style={{ transform: props.xy.interpolate(trans8) }}
                  />
                </motion.div>
              </Box>
            </Box>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
export default About;
