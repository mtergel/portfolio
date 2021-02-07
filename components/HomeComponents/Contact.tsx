import { Box, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../common";

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

const Contact: React.FC<{ active: boolean }> = ({ active }) => {
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
              justifyContent="flex-start"
              flexDir={["column", "column", "column", "row", "row"]}
              pl={["0", "24px", "32px"]}
              pr={["0", "24px", "32px"]}
            >
              <Box
                display={"flex"}
                flexDir="column"
                height="100%"
                justifyContent="center"
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
                      {"Let’s talk".split("").map((char, index) => (
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
                        ml={2}
                        bg="primary.main"
                        width="80%"
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
                  <Box mt={16} textAlign={["center", "center", "left"]}>
                    <Text mb={2}>Feel free to contact me</Text>
                    <Text
                      as="a"
                      href="mailto:tergelm@gmail.com"
                      fontSize="24px"
                    >
                      tergelm@gmail.com
                    </Text>
                  </Box>
                </motion.div>
              </Box>
            </Box>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
export default Contact;
