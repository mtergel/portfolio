import { Box, Divider, Heading, Icon, Link, Wrap } from "@chakra-ui/react";
import { Layout } from "../../components";
import { Container } from "../../components/common";
import NextLink from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { getSortedProjectsData } from "../../lib/projects";

import ProjectModal from "../../components/ProjectModal/ProjectModal";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = ({ allProjectsData }) => {
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
          <Wrap
            width="100%"
            spacing="30px"
            justify={["center", "center", "center", "flex-start"]}
          >
            {allProjectsData.map(({ id, subtitle, title, image, links }) => (
              <ProjectCard
                key={id}
                id={id}
                subtitle={subtitle}
                title={title}
                image={image}
                links={links}
              />
            ))}
          </Wrap>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="flex-start"
            flexDir="column"
          >
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
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
