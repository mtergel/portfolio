import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Heading as="h1" size="4xl">
        ABOUT
      </Heading>
      {/* <Text fontWeight="500">Frontend developer based in Mongolia.</Text> */}
      <Heading as="h6" variant="subheader">
        Frontend developer based in Mongolia.
      </Heading>
      <Text>Design, music, artwork, code.</Text>
      <Box
        width="55px"
        height="55px"
        border="1px solid white"
        boxSizing="border-box"
        backgroundColor="background"
      />
      <Box
        width="55px"
        height="55px"
        border="1px solid white"
        boxSizing="border-box"
        backgroundColor="primary.alt"
      />
      <Box
        width="55px"
        height="55px"
        border="1px solid white"
        boxSizing="border-box"
        backgroundColor="primary.main"
      />
      <Box
        width="55px"
        height="55px"
        border="1px solid white"
        boxSizing="border-box"
        backgroundColor="primary.light"
      />
      <Box
        width="55px"
        height="55px"
        border="1px solid white"
        boxSizing="border-box"
        backgroundColor="secondary"
      />
      <Button
        rightIcon={<Icon fontSize="24px" as={BsArrowRightShort} />}
        variant="more"
      >
        View all
      </Button>

      {/* <Heading fontSize="62px" textTransform="uppercase">
        JULIUS SANS ONE
      </Heading>
      <Text
        fontSize="24px"
        textTransform="uppercase"
        fontStyle="bold"
        letterSpacing="0.11em"
      >
        ARCHIVO NARROW
      </Text>
      <Text fontSize="16px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem
        soluta at laudantium repellendus. Tenetur perspiciatis, ea eaque vel
        impedit ab sint corporis voluptatibus nostrum repudiandae repellat
        laborum? Error, eos!
      </Text> */}
    </>
  );
};

export default Home;
