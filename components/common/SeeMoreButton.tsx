import { ButtonProps, Button as ChakraButton, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

interface SeeMoreProps extends ButtonProps {
  direction?: "right" | "left";
}

const Button: React.FC<SeeMoreProps> = (props) => {
  const parentVariants = {
    hover: {
      scale: 1.08,
    },
  };

  const childrenVariants = {
    hover: {
      rotate: 360,
    },
  };

  const { direction, ...rest } = props;

  return (
    <motion.div whileHover="hover" variants={parentVariants}>
      <ChakraButton
        rightIcon={
          direction === "right" ? (
            <motion.div variants={childrenVariants}>
              <Icon fontSize="32px" as={BsArrowRightShort} />
            </motion.div>
          ) : (
            <></>
          )
        }
        leftIcon={
          direction === "left" ? (
            <motion.div variants={childrenVariants}>
              <Icon fontSize="32px" as={BsArrowLeftShort} />
            </motion.div>
          ) : (
            <></>
          )
        }
        variant="more"
        {...props}
      >
        {props.children}
      </ChakraButton>
    </motion.div>
  );
};
export default Button;
