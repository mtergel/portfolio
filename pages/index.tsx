import { Layout, About, Contact, Hero, Projects } from "../components";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["top", "about", "projects", "contact"];

const Home = () => {
  return (
    <Layout>
      <ReactFullpage
        navigation
        navigationPosition="left"
        scrollingSpeed="1000"
        anchors={anchors}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout>
  );
};

export default Home;
