import { ButtonProps, Button as ChakraButton, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ChakraButton
      rightIcon={<Icon fontSize="32px" as={BsArrowRightShort} />}
      variant="more"
      {...props}
    >
      {props.children}
    </ChakraButton>
  );
};
export default Button;
