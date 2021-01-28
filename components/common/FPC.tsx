import { Container } from "@chakra-ui/react";

const FPC: React.FC<{}> = ({ children }) => {
  return (
    <Container
      maxWidth="140ch"
      marginTop={["64px", "64px", "89px", "153px"]}
      border="1px solid"
      height={[
        "calc(100% - 64px - 153px)",
        "calc(100% - 64px - 153px)",
        "calc(100% - 89px - 153px)",
        "calc(100% - 153px - 153px)",
      ]}
    >
      {children}
    </Container>
  );
};
export default FPC;
