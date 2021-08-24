import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading } from "evergreen-ui";
import Layout from "../components/common/Layout";

const Recipes: NextPage = () => {
  return (
    <Layout>
      <Head
        pageName="Recipes"
        description="uses the awesome Edamam API for recipes and nutrition data."
      />

      <Pane display="flex" alignItems="center" justifyContent="center">
        <Heading size={900}>Search through 1.7+ million recipes</Heading>
      </Pane>
    </Layout>
  );
};

export default Recipes;
