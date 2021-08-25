import React, { useState, MouseEvent } from "react";
import type { NextPage } from "next";
import Head from "../components/common/Head";
import { Pane, Heading, SearchInput, Button, majorScale } from "evergreen-ui";
import Layout from "../components/common/Layout";
import Category from "../components/category/Category";
import categories from "../features/category/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchRecipes, selectRecipes } from "../features/recipes/recipesSlice";

const Recipes: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();
  const { recipes, pending, error } = useAppSelector(selectRecipes);

  const handleChangeSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(searchRecipes(searchTerm));
    console.log(recipes);
  };

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
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading size={900}>Search through 1.7+ million recipes</Heading>

          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            margin={majorScale(3)}
          >
            <SearchInput
              marginRight={majorScale(3)}
              onChange={handleChangeSearchTerm}
              value={searchTerm}
            />
            <Button onClick={handleSearchButtonClick}>Get Recipes</Button>
          </Pane>
        </Pane>

        {categories.map((category) => (
          <Category {...category} key={category.title} />
        ))}
      </Pane>
    </Layout>
  );
};

export default Recipes;
