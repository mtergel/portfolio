import { Box, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../common";
import styles from "./Hero.module.css";
import HeroCard from "./HeroCard";
import NextLink from "next/link";

const sentence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.4,
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

const imagesVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.4,
      delayChildren: 0.8,
      staggerChildren: 0.08,
    },
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

const Hero: React.FC<{
  active: boolean;
  moveTo?: (index: number, fallback: number) => void;
}> = ({ active, moveTo }) => {
  const handleClickContact = () => {
    moveTo && moveTo(4, 0);
  };

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
                display={["none", "flex"]}
                flexDir="column"
                height="100%"
                justifyContent="space-around"
                maxHeight="358px"
                alignItems={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                  "flex-start",
                ]}
                width={["auto", "auto", "100%", "100%", "auto"]}
                mr={["0", "0", "0", "64px"]}
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
                      {"TERGEL".split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </Heading>
                  <Heading as="h1" size="2xl" mb={6}>
                    <motion.div
                      variants={sentence}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {"MUNKHDELGER".split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </Heading>
                  <Box>
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
                  className={styles.subtitle}
                  variants={subTitleVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Frontend developer, designer
                </motion.div>
              </Box>
              <motion.div
                className={styles.cards}
                variants={imagesVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <NextLink href="/about">
                  <HeroCard
                    index="CARD1"
                    svgMask="/images/CARD1_HOVER.svg"
                    svgUrl="/images/CARD1.svg"
                  />
                </NextLink>
                <NextLink href="/projects">
                  <HeroCard
                    index="CARD2"
                    svgMask="/images/CARD2_HOVER.svg"
                    svgUrl="/images/CARD2.svg"
                  />
                </NextLink>

                <HeroCard
                  index="CARD3"
                  svgMask="/images/CARD3_HOVER.svg"
                  svgUrl="/images/CARD3.svg"
                  onClick={handleClickContact}
                />
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
export default Hero;
