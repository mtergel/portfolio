import { Box, Container, Link } from "@chakra-ui/layout";
import { Layout } from "../../components";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import NextLink from "next/link";
import Icon from "@chakra-ui/icon";
import { BsArrowLeftShort } from "react-icons/bs";
const SingleProjectPage = ({ postData }) => {
  return (
    <Layout>
      <Container maxW="3xl" my={["64px", "64px", "89px", "153px"]} py={2}>
        <Box marginY={"2rem"}>
          <NextLink href="/projects" passHref>
            <Link width="100%">
              <Icon as={BsArrowLeftShort} mr={4} fontSize="lg" />
              Back
            </Link>
          </NextLink>
        </Box>
        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={postData.mdContent}
          escapeHtml={false}
        />
        <Box marginY={"4rem"}>
          <NextLink href="/projects" passHref>
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

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default SingleProjectPage;
