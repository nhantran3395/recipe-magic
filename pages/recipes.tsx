import React from "react";
import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading, Spinner } from "evergreen-ui";
import Layout from "../components/common/Layout";
import SearchBar from "../components/common/SearchBar";
import RecipeList from "../components/recipe/RecipeList";
import CategoryList from "../components/category/CategoryList";
import categories from "../features/categories/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchRecipes, selectRecipes } from "../features/recipes/recipesSlice";

const Recipes: NextPage = () => {
  const dispatch = useAppDispatch();
  const { recipes, isPending, isError } = useAppSelector(selectRecipes);

  const handleSearchRecipes = (searchTerm: string) => {
    dispatch(searchRecipes(searchTerm));
    console.log(recipes);
  };

  const isRecipesEmpty = () => {
    return recipes.length === 0;
  };

  const isToShowCategoryList = () => {
    return isRecipesEmpty() && !isPending;
  };

  const isToShowSpinner = () => {
    return isPending;
  };

  const isToShowRecipeList = () => {
    return !isRecipesEmpty() && !isPending;
  };

  return (
    <>
      <Head
        pageName="Recipes"
        description="uses the awesome Edamam API for recipes and nutrition data."
      />

      <Layout>
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading size={900}>Search through 1.7+ million recipes</Heading>

          <SearchBar handleSearchButtonClick={handleSearchRecipes} />

          {isToShowCategoryList() ? (
            <CategoryList categories={categories} />
          ) : null}

          {isToShowSpinner() ? <Spinner /> : null}

          {isToShowRecipeList() ? <RecipeList recipes={recipes} /> : null}
        </Pane>
      </Layout>
    </>
  );
};

export default Recipes;
