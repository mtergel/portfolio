import {
  Box,
  Button,
  Divider,
  Heading,
  Icon,
  Text,
  Link,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Layout } from "../../components";
import { Container } from "../../components/common";
import { ImFilesEmpty } from "react-icons/im";
import NextLink from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { getSortedProjectsData } from "../../lib/projects";
import { HiOutlinePlus } from "react-icons/hi";

import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { useRouter } from "next/dist/client/router";

const Projects = ({ allProjectsData }) => {
  const router = useRouter();
  return (
    <>
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
          <Box>
            {allProjectsData.map(({ id, date, title, image }) => (
              <Box borderRadius="md" key={id} overflow="hidden" width="250px">
                <NextLink
                  href={`/projects/?id=${id}`}
                  as={`/projects/${id}`}
                  passHref
                  scroll={false}
                >
                  <Box
                    height="300px"
                    width="250px"
                    overflow="hidden"
                    position="relative"
                    cursor="pointer"
                  >
                    <Box
                      position="absolute"
                      bottom={0}
                      top={0}
                      left={0}
                      right={0}
                      backgroundSize="cover"
                      background={`linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(201, 32, 82, 0.73)), url(${image}) no-repeat center center`}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "scale(1.5)",
                      }}
                    />
                    <Box
                      position="absolute"
                      bottom="0px"
                      left={0}
                      pb={6}
                      px={6}
                    >
                      <Heading size="md">{title}</Heading>
                    </Box>
                  </Box>
                </NextLink>

                <Box
                  backgroundColor="gray.800"
                  py={6}
                  px={4}
                  position="relative"
                >
                  {/* <Tooltip label="See more">
                    <IconButton
                      aria-label="See more"
                      isRound
                      icon={<HiOutlinePlus />}
                      position="absolute"
                      top="-20px"
                      variant="solid"
                      right="20px"
                      backgroundColor="#c92052"
                      _active={{
                        backgroundColor: "#c92052",
                      }}
                      _focus={{
                        boxShadow: "0 0 0 3px #FFFFFF",
                        backgroundColor: "#c92052",
                      }}
                      _hover={{
                        backgroundColor: "#c92052",
                      }}
                      onClick={() => router.push(`/projects/${id}`)}
                    />
                  </Tooltip> */}

                  <HStack>
                    <Button
                      size="sm"
                      variant="solid"
                      background="#c92052"
                      _active={{
                        background: "#c92052",
                      }}
                      _focus={{
                        boxShadow: "0 0 0 3px #FFFFFF",
                        background: "primary.light",
                      }}
                      _hover={{
                        background: "#c92052",
                      }}
                    >
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      _active={{
                        background: "#c92052",
                      }}
                      _focus={{
                        boxShadow: "0 0 0 3px #FFFFFF",
                        background: "primary.light",
                      }}
                      _hover={{
                        background: "#c92052",
                      }}
                    >
                      Code
                    </Button>
                  </HStack>
                </Box>
              </Box>
            ))}
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
      <ProjectModal />
    </>
  );
};

export default Projects;

export async function getStaticProps(context) {
  console.log("context in '/projects' : ", context);

  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
