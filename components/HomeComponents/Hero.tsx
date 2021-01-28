import { Box, Heading } from "@chakra-ui/react";
import { Container } from "../common";

const Hero: React.FC<{}> = () => {
  return (
    <div className="section">
      <Container>
        <Heading as="h1" size="4xl">
          TERGEL MUNKHDELGER
        </Heading>
      </Container>
    </div>
  );
};
export default Hero;
