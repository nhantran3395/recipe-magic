import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading } from "evergreen-ui";
import Layout from "../components/common/Layout";

const SavedRecipes: NextPage = () => {
  return (
    <Layout>
      <Head
        pageName="Saved Recipes"
        description="uses the awesome Edamam API for recipes and nutrition data."
      />

      <Pane display="flex" alignItems="center" justifyContent="center">
        <Heading size={900}>No saved recipes found</Heading>
      </Pane>
    </Layout>
  );
};

export default SavedRecipes;
