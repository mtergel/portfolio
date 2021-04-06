import { Button, IconButton } from "@chakra-ui/button";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import NextLink from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  subtitle,
  image,
}) => {
  return (
    <Box
      borderRadius="md"
      key={id}
      overflow="hidden"
      width="275px"
      className={styles.card}
    >
      <NextLink
        href={`/projects/?id=${id}`}
        as={`/projects/${id}`}
        passHref
        scroll={false}
      >
        <Box
          height="325px"
          width="275px"
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
            className={styles.bgImage}
          />
          <Box position="absolute" bottom="0px" left={0} pb={6} px={6}>
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm">{subtitle}</Text>
          </Box>
        </Box>
      </NextLink>

      <Box backgroundColor="gray.800" py={6} px={4} position="relative">
        <NextLink
          href={`/projects/?id=${id}`}
          as={`/projects/${id}`}
          passHref
          scroll={false}
        >
          <Tooltip label="See more">
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
            />
          </Tooltip>
        </NextLink>

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
  );
};

export default ProjectCard;
