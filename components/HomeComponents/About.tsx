import { Container } from "../common";
import { useSpring, animated } from "react-spring";
import { Box, Text } from "@chakra-ui/react";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 120}px,${y / 8 - 120}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 160}px,${y / 6 + 40}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6}px,${y / 10 - 80}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 3.5 + 135}px,${y / 6 + 115}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 12 - 5}px,${y / 10 + 275}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 10 + 135}px,${y / 10 + 275}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 10 - 135}px,${y / 10 + 275}px,0)`;

const About: React.FC<{}> = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div className="section">
      <Container>
        <Box display="flex" height="100%">
          <Box flex={[2, 2, 1]}>
            <Box
              width="100%"
              height="100%"
              maxW={600}
              border="1px solid"
              zIndex={3}
              backgroundColor="#1A1A1D"
              position="relative"
            >
              <Box position="absolute">
                <Text>
                  My name is Tergel Munkhdelger, and I’m a 23-year-old Front End
                  Developer based in Mongolia. I like creating simple,
                  user-friendly websites. Aside from my job, I like learning
                  about web/mobile designs. In my free time, you can find me
                  playing my guitar, making instrumentals and petting all the
                  good dogs. Tergel means the 15th day of the lunar month or
                  Full moon.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box flexGrow={1}>
            <div
              className="container"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <animated.div
                className="card1"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans1) }}
              />
              <animated.div
                className="card2"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans2) }}
              />
              <animated.div
                className="card3"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans3) }}
              />
              <animated.div
                className="card4"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans4) }}
              />
              <animated.div
                className="card5"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans5) }}
              />
              <animated.div
                className="card8"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans6) }}
              />
              <animated.div
                className="card7"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans7) }}
              />
              <animated.div
                className="card6"
                //@ts-ignore
                style={{ transform: props.xy.interpolate(trans8) }}
              />
            </div>
          </Box>
        </Box>

        {/* <div className="moon">
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
        </div> */}
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
