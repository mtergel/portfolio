import { Box, Button, Heading, Icon, Text, Container } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import { Layout } from "../components";

const Home = () => {
  return (
    <Layout>
      <Container maxWidth="140ch">
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
        {/* <Button
        rightIcon={<Icon fontSize="32px" as={BsArrowRightShort} />}
        variant="more"
      >
        View all
      </Button> */}
      </Container>
    </Layout>
  );
};

export default Home;
