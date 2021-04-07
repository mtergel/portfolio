import { Button, IconButton } from "@chakra-ui/button";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  links: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  subtitle,
  image,
  links,
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
        <iframe
          src={`https://ghbtns.com/github-btn.html?user=mtergel&repo=${id}&type=star&count=true`}
          scrolling="0"
          width="150"
          height="20"
          title="GitHub"
          style={{
            position: "absolute",
            top: "-10px",
            right: "-60px",
          }}
        ></iframe>

        <HStack>
          {links &&
            Object.entries(links).map(([title, href], index) => (
              <Button
                size="sm"
                variant={index === 0 ? "solid" : "outline"}
                key={title}
                as="a"
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme={id === "senritsu" ? "pink" : undefined}
              >
                {title}
              </Button>
            ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
