import { Box, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Container } from "../common";
import NextLink from "next/link";
import styles from "./ImageCover.module.scss";

const sentence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.4,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const linesVariant = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.4,
    },
  },
};

const subTitleVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
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

const imageContainerVariant = {
  hidden: {
    x: 72,
    y: -25,
    scale: 0.4,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 18,
      damping: 6,
    },
  },
  exit: {
    opacity: 0,
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
  },
};

const imageOverlay = {
  hidden: {
    translateX: "0%",
    translateZ: "0px",
  },
  visible: {
    translateX: "110%",
    translateZ: "0px",
    transition: {
      duration: 1,
      ease: [0.54, 0.21, 0.35, 0.85],
    },
  },
};

const infoBoxVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Projects: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className="section">
      <Container>
        <AnimatePresence>
          {active && (
            <Box
              height="100%"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexDir={["column", "column", "column", "row", "row"]}
              pl={["0", "24px", "32px"]}
              pr={["0", "24px", "32px"]}
            >
              <Box
                display={"flex"}
                flexDir="column"
                height="100%"
                justifyContent="space-around"
                alignItems={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                  "flex-start",
                ]}
                pb={["0", "0", "0", "32px"]}
              >
                <motion.div>
                  <Heading as="h1" size="2xl">
                    <motion.div
                      variants={sentence}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"PROJECTS".split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </Heading>

                  <Box mt={4}>
                    <motion.div
                      variants={linesVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Box
                        height="4px"
                        ml={6}
                        bg="primary.main"
                        width="20%"
                        borderRadius={4}
                        mb={3}
                      />
                      <Box
                        height="4px"
                        ml={2}
                        bg="primary.main"
                        width="20%"
                        borderRadius={4}
                      />
                    </motion.div>
                  </Box>
                </motion.div>
                <motion.div
                  variants={subTitleVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Few projects I've worked on recently.
                </motion.div>
                <NextLink href="/projects" passHref>
                  <motion.div
                    variants={linesVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Button direction="right">View all</Button>
                  </motion.div>
                </NextLink>
              </Box>

              <motion.div
                variants={imageContainerVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={styles.imageContainer}
              >
                <NextLink href="/projects" passHref>
                  <motion.a
                    variants={imageVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={styles.imageOver}
                  >
                    <motion.div
                      className={styles.imageCover}
                      variants={imageOverlay}
                    />
                    <motion.div
                      className={styles.imageCover}
                      variants={imageOverlay}
                    />
                  </motion.a>
                </NextLink>
                <motion.div
                  className={styles.infoBox}
                  variants={infoBoxVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Heading size="md">Senritsu</Heading>
                  <Text>Make your perfect playlist.</Text>
                </motion.div>
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Projects;
