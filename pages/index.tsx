import type { NextPage } from "next";
import { Pane, Heading } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head
        pageName="Home"
        description="uses the awesome Edamam API for recipes and nutrition data."
      />

      <Pane display="flex" alignItems="center" justifyContent="center">
        <Heading size={900}>Explore foods from around the globe</Heading>
      </Pane>
    </Layout>
  );
};

export default Home;
