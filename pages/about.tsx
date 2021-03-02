import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  Avatar,
  Link,
  Icon,
} from "@chakra-ui/react";
import { Layout } from "../components";
import { Container } from "../components/common";
import {
  SiApollographql,
  SiGraphql,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiFirebase,
} from "react-icons/si";
import { BsArrowLeftShort } from "react-icons/bs";
import NextLink from "next/link";
const About = () => {
  return (
    <Layout>
      <Container paddingTop>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          marginBottom="40px"
        >
          <Heading flexShrink={0}>Me, Myself & I</Heading>
          <Divider marginLeft="40px" />
        </Box>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={[12, 12, 6]}>
            <Stack spacing={4} py={6} px={8} borderRadius={4} height="100%">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Avatar name="Bunny" src="images/bunny.jpg" size="2xl" />
              </Box>
              <Text as="p">
                I’m a Front-End Developer located in Mongolia. I have a passion
                for simple, slick UI effects and minimal designs.
              </Text>
              <Text as="p">Fan of Nirvana. 🎸</Text>
              <Text as="p">
                Intrested in front-end development, and working on enthusiastic
                projects with positive people
              </Text>
              <Text as="p" color="blue.200">
                Let's work together.
              </Text>
            </Stack>
          </GridItem>

          <GridItem colSpan={[12, 12, 6]}>
            <Stack
              spacing={4}
              borderTop="4px solid"
              borderTopColor="blue.200"
              boxShadow="lg"
              py={6}
              px={8}
              borderRadius={4}
              height="100%"
              background="gray.800"
            >
              <Heading size="sm">Skill set</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={SiReact} color="blue.500" fontSize="xl" />
                  React, Functional components, Hooks, React Native
                </ListItem>
                <ListItem>
                  <ListIcon as={SiRedux} color="purple.500" fontSize="xl" />
                  Redux, Redux-Thunk
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={SiApollographql}
                    color="gray.100"
                    fontSize="xl"
                  />
                  Apollo, Apollo-server, Apollo-client
                </ListItem>
                <ListItem>
                  <ListIcon as={SiGraphql} color="pink.500" fontSize="xl" />
                  GraphQL, TypeGraphQL combined wtih TypeORM
                </ListItem>
                <ListItem>
                  <ListIcon as={SiNextDotJs} color="gray.100" fontSize="xl" />
                  Next.js
                </ListItem>
                <ListItem>
                  <ListIcon as={SiFirebase} color="yellow.500" fontSize="xl" />
                  Firebase and other cloud services
                </ListItem>
              </List>
            </Stack>
          </GridItem>
        </Grid>

        <Box
          display={["flex", "flex", "none"]}
          width="100%"
          alignItems="center"
          justifyContent="start"
          marginY={["1rem", "1rem", 0]}
        >
          <NextLink href="/" passHref>
            <Link width="100%">
              <Icon as={BsArrowLeftShort} mr={4} fontSize="lg" />
              Back
            </Link>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
