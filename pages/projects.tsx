import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import { Layout } from "../components";
import { Container } from "../components/common";
import { ImFilesEmpty } from "react-icons/im";
import NextLink from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const Projects = () => {
  return (
    <Layout>
      <Container paddingTop>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          marginBottom="40px"
        >
          <Heading flexShrink={0}>Projects</Heading>
          <Divider marginLeft="40px" />
        </Box>
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Icon as={ImFilesEmpty} fontSize="2xl" />
          <Heading size="md" marginTop="16px" marginBottom="48px">
            It's bit empty here...
          </Heading>
          <Box display="flex" alignItems="center">
            <Text>
              Check out my
              <NextLink href="https://github.com/mtergel" passHref>
                <Button mx={3}>Github</Button>
              </NextLink>
              for now.
            </Text>
          </Box>
          <Box marginY={"4rem"}>
            <NextLink href="/" passHref>
              <Link width="100%">
                <Icon as={BsArrowLeftShort} mr={4} fontSize="lg" />
                Back
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Projects;
