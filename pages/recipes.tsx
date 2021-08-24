import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading } from "evergreen-ui";
import Layout from "../components/common/Layout";
import Category from "../components/category/Category";

const mealOfTheDay = {
  title: "Meal of the day",
  options: [
    {
      name: "Breakfast",
      thumbnail: "/breakfast.jpg",
    },
    {
      name: "Lunch",
      thumbnail: "/lunch.jpg",
    },
    {
      name: "Dinner",
      thumbnail: "/dinner.jpg",
    },
    {
      name: "Desserts",
      thumbnail: "/desserts.jpg",
    },
  ],
};

const healthyMeals = {
  title: "Healthy meals",
  options: [
    {
      name: "Vegan",
      thumbnail: "/vegan.jpg",
    },
    {
      name: "Vegetarian",
      thumbnail: "/vegetarian.jpg",
    },
    {
      name: "Low Sugar",
      thumbnail: "/low-sugar.jpg",
    },
    {
      name: "Nut Free",
      thumbnail: "/nut-free.jpg",
    },
  ],
};

const categories = [mealOfTheDay, healthyMeals];

const Recipes: NextPage = () => {
  return (
    <Layout>
      <Head
        pageName="Recipes"
        description="uses the awesome Edamam API for recipes and nutrition data."
      />

      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading size={900}>Search through 1.7+ million recipes</Heading>

        {categories.map((category) => (
          <Category {...category} key={category.title} />
        ))}
      </Pane>
    </Layout>
  );
};

export default Recipes;
