import { Box, Heading, IconButton, Spacer, Container } from "@chakra-ui/react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Overlay from "./Overlay";
import { useRouter } from "next/dist/client/router";

const links = [
  {
    icon: <RiGithubFill />,
    link: "https://github.com/mtergel",
    label: "Link to my github",
  },
  {
    icon: <RiLinkedinBoxFill />,
    link:
      "https://mn.linkedin.com/public-profile/in/tergel-munkhdelger-303977174",
    label: "Link to my linked in",
  },
];

const Navbar: React.FC<{}> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Box
      width="100%"
      as="nav"
      height={["64px", "64px", "89px", "153px"]}
      display="flex"
      alignItems="center"
      position="fixed"
      backgroundColor={router.pathname === "/" ? "transparent" : "background"}
      top="0"
      zIndex={2}
    >
      <Container maxWidth="140ch" zIndex={2}>
        <Box display="flex" alignItems="center" width="100%" zIndex={2}>
          <NextLink href="/" passHref>
            <Heading
              fontSize={["md", "xl", "2xl", "2xl"]}
              as="a"
              userSelect="none"
            >
              Tergel Munkhdelger
            </Heading>
          </NextLink>

          <Spacer />
          {links.map((link) => (
            <Box
              key={link.link}
              mr={["8px", "25px", "55px", "70px"]}
              display={{ base: "none", md: "block" }}
            >
              <NextLink href={link.link} passHref>
                <IconButton
                  as="a"
                  aria-label={link.label}
                  icon={link.icon}
                  variant="ghost"
                  fontSize={"24px"}
                />
              </NextLink>
            </Box>
          ))}
          <IconButton
            aria-label={"Open menu"}
            variant="ghost"
            fontSize="24px"
            onClick={toggleOpen}
          >
            <MenuSvg isOpen={menuOpen} />
          </IconButton>
        </Box>
      </Container>
      <Overlay open={menuOpen} onClick={toggleOpen} />
    </Box>
  );
};
export default Navbar;

const MenuSvg = ({ isOpen }) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * 16) / 16;

  const lineProps = {
    stroke: "white",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={16}
      height={16}
    >
      <motion.line
        x1={isOpen ? 0 : 1}
        x2={isOpen ? unitWidth : unitWidth - 0.2}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1={isOpen ? 0 : 0.2}
        x2={isOpen ? unitWidth : unitWidth - 0.8}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};
