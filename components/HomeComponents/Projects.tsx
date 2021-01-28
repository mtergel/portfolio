import { Heading } from "@chakra-ui/react";
import { Container } from "../common";

const Projects: React.FC<{}> = () => {
  return (
    <div className="section">
      <Container>
        <Heading as="h1" size="4xl">
          PROJECTS
        </Heading>
      </Container>
    </div>
  );
};
export default Projects;
