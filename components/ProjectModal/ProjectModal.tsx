import { useRouter } from "next/dist/client/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import matter from "gray-matter";

const ProjectModal = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProjectData = async (id: string) => {
    try {
      setLoading(true);
      // const data = await getProjectData(id);
      // @ts-ignore
      const data = await import(`../../projects/${id}.md`);
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(data.default);

      setProjectData(matterResult.content);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router.query.id && typeof router.query.id === "string") {
      fetchProjectData(router.query.id);
    } else {
      setProjectData(null);
    }
  }, [router.query.id]);

  // console.log(projectData);

  return (
    <Modal
      isOpen={!!router.query.id}
      onClose={() =>
        router.push(
          {
            pathname: "/projects",
          },
          undefined,
          {
            scroll: false,
          }
        )
      }
      scrollBehavior="outside"
      blockScrollOnMount={false}
      motionPreset="slideInBottom"
      preserveScrollBarGap={true}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <CircularProgress isIndeterminate />
          ) : (
            <ReactMarkdown
              renderers={ChakraUIRenderer()}
              source={projectData}
              escapeHtml={false}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
