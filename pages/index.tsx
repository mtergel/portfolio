import { Layout, About, Contact, Hero, Projects } from "../components";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";

const anchors = ["top", "about", "projects", "contact"];

const Home = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Layout>
      <ReactFullpage
        navigation
        navigationPosition="left"
        scrollingSpeed="1000"
        onLeave={() => setActiveStep(null)}
        afterLoad={(origin, destination, direction) =>
          setActiveStep(destination.index)
        }
        anchors={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Hero
                active={activeStep === 0}
                moveTo={fullpageApi && fullpageApi.moveTo}
              />
              <About active={activeStep === 1} />
              <Projects active={activeStep === 2} />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout>
  );
};

export default Home;
