import { Box, Heading } from "@chakra-ui/react";
import { Container } from "../common";

const About: React.FC<{}> = () => {
  // height={[
  //   "calc(100% - 64px - 64px)",
  //   "calc(100% - 64px - 64px)",
  //   "calc(100% - 89px - 89px)",
  //   "calc(100% - 153px - 153px)",
  // ]}
  return (
    <div className="section">
      <Container>
        <div className="moon">
          <div className="moon__img js-parallax-moon">
            <div className="moon__front layer" data-depth="0.8">
              <div className="cloud cloud--front1 js-moon">
                <img src="/images/moon/cloud.svg" alt="cloud" />
              </div>
            </div>
            <div className="moon__back layer" data-depth="0.4">
              <div className="cloud cloud--back2 js-moon">
                <img src="/images/moon/cloud1.svg" alt="cloud" />
              </div>
            </div>
            <div className="moon__front layer" data-depth="0.6">
              <div className="cloud cloud--front2 js-moon">
                <img src="/images/moon/cloud2.svg" alt="cloud" />
              </div>
            </div>
            <div className="moon__back layer" data-depth="0.5">
              <img className="js-moon" src="/images/moon/moon.svg" alt="moon" />
            </div>
            <div className="moon__front layer" data-depth="0.7">
              <div className="cloud cloud--front3 js-moon">
                <img src="/images/moon/cloud1.svg" alt="cloud" />
              </div>
            </div>
            <div className="moon__back layer" data-depth="0.3">
              <div className="cloud cloud--back1 js-moon">
                <img src="/images/moon/star.svg" alt="cloud" />
              </div>
            </div>
          </div>
        </div>
        {/* <Box position="relative" width="100%" height="100%" border="1px solid">
          <Box
            position="absolute"
            top={0}
            bottom={0}
            display="flex"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            border="1px solid"
          >
            <Box
              pointerEvents="none"
              position="relative"
              width={"50%"}
              height={"50%"}
            >
              <Box
                position="absolute"
                display="block"
                left={0}
                top={0}
                width="100%"
                height="100%"
                transform="translate3d(7.5px, 10.4px, 0px)"
              >
                <Box
                  src="/images/moon/moon.svg"
                  alt="moon"
                  as="img"
                  height="auto"
                  maxW="100%"
                  verticalAlign="middle"
                  width="auto"
                />
              </Box>
              <Box
                position="absolute"
                display="block"
                left={0}
                top={0}
                width="100%"
                height="100%"
                right="-8%"
                transform="translate3d(7.5px, 10.4px, 0px)"
              >
                <Box
                  src="/images/moon/cloud.svg"
                  alt="moon"
                  as="img"
                  height="auto"
                  maxW="100%"
                  verticalAlign="middle"
                  width="auto"
                />
              </Box>
            </Box>
          </Box>
        </Box> */}
        {/* <Heading as="h1" size="4xl">
          ABOUT
        </Heading> */}
      </Container>
    </div>
  );
};
export default About;
