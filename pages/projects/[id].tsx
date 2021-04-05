import { Layout } from "../../components";
import { getAllProjectIds, getProjectData } from "../../lib/projects";

const SingleProjectPage = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default SingleProjectPage;
