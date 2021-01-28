import { Heading } from "@chakra-ui/react";
import { Container } from "../common";

const Contact: React.FC<{}> = () => {
  return (
    <div className="section">
      <Container>
        <Heading as="h1" size="4xl">
          LET'S TALK
        </Heading>
      </Container>
    </div>
  );
};
export default Contact;
