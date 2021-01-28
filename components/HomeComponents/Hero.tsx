import { Box, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../common";

const TitleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Hero: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className="section">
      <Container>
        <AnimatePresence>
          {active && (
            <Heading as="h1" size="4xl">
              <motion.div
                variants={TitleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                TERGEL MUNKHDELGER
              </motion.div>
            </Heading>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};
export default Hero;
