import { Heading } from "@chakra-ui/react";
import { Container } from "../common";

const About: React.FC<{}> = () => {
  return (
    <div className="section">
      <Container>
        <Heading as="h1" size="4xl">
          ABOUT
        </Heading>
      </Container>
    </div>
  );
};
export default About;
