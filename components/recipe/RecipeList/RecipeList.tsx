import React from "react";
import { Pane } from "evergreen-ui";
import RecipeCard from "../RecipeCard";
import { IRecipeListProps } from "./interfaces";

const RecipeList = ({ recipes }: IRecipeListProps) => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      flexWrap="wrap"
    >
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}
    </Pane>
  );
};

export default RecipeList;
