import { Box, Center, Heading, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import styles from "./Overlay.module.css";

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
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "Contact me",
    link: "/#contact",
  },
];

const Overlay: React.FC<OverlayProps> = ({ open, onClick }) => {
  return (
    <Box
      width="100%"
      height={open ? "100%" : "0px"}
      position="fixed"
      zIndex="1"
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
          </motion.ol>
        )}
      </AnimatePresence>
    </Box>
  );
};
export default Overlay;
