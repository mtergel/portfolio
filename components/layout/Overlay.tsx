import { Box, Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import styles from "./Overlay.module.css";
import { useEffect, useState } from "react";

interface OverlayProps {
  open: boolean;
  onClick: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const links = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Projects",
    link: "/projects",
  },
];

const Overlay: React.FC<OverlayProps> = ({ open, onClick }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    const handleClickHome = () => {
      try {
        fullpage_api &&
          fullpage_api.hasOwnProperty("moveTo") &&
          fullpage_api.moveTo(1, 0);
      } catch (error) {}

      onClick();
    };
    const handleClickContact = () => {
      try {
        fullpage_api &&
          fullpage_api.hasOwnProperty("moveTo") &&
          fullpage_api.moveTo(4, 0);
      } catch (error) {}

      onClick();
    };

    return (
      <Box
        width="100%"
        height={open ? "100%" : "0px"}
        position="fixed"
        left="0"
        top="0"
        backgroundColor="rgba(0, 0, 0, 0.88)"
        overflow="hidden"
        transition="0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86)"
      >
        <AnimatePresence>
          {open && (
            <motion.ol
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={styles.overlayItems}
            >
              <NextLink href={"/#top"} passHref>
                <Heading
                  fontSize={["4xl", "5xl", "5xl", "7xl"]}
                  as="a"
                  userSelect="none"
                  cursor="pointer"
                >
                  <motion.li
                    variants={item}
                    whileHover={{ scale: 1.2 }}
                    onClick={handleClickHome}
                  >
                    Home
                  </motion.li>
                </Heading>
              </NextLink>

              {links.map((link) => (
                <NextLink href={link.link} passHref key={link.text}>
                  <Heading
                    fontSize={["4xl", "5xl", "5xl", "7xl"]}
                    as="a"
                    userSelect="none"
                  >
                    <motion.li
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      onClick={onClick}
                    >
                      {link.text}
                    </motion.li>
                  </Heading>
                </NextLink>
              ))}
              <NextLink href={"/#contact"} passHref>
                <Heading
                  fontSize={["4xl", "5xl", "5xl", "7xl"]}
                  as="a"
                  userSelect="none"
                  cursor="pointer"
                >
                  <motion.li
                    variants={item}
                    whileHover={{ scale: 1.2 }}
                    onClick={handleClickContact}
                  >
                    Contact
                  </motion.li>
                </Heading>
              </NextLink>
            </motion.ol>
          )}
        </AnimatePresence>
      </Box>
    );
  } else {
    return null;
  }
};
export default Overlay;
