import React, { useState, MouseEvent } from "react";
import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading } from "evergreen-ui";
import Layout from "../components/common/Layout";
import SearchBar from "../components/common/SearchBar";
import CategoryList from "../components/category/CategoryList";
import categories from "../features/categories/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchRecipes, selectRecipes } from "../features/recipes/recipesSlice";

const Recipes: NextPage = () => {
  const dispatch = useAppDispatch();
  const { recipes, pending, error } = useAppSelector(selectRecipes);

  const handleSearchRecipes = (searchTerm: string) => {
    dispatch(searchRecipes(searchTerm));
    console.log(recipes);
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

          <CategoryList categories={categories} />
        </Pane>
      </Layout>
    </>
  );
};

export default Recipes;
