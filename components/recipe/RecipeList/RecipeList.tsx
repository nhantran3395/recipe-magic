import React from "react";
import { Pane, majorScale } from "evergreen-ui";
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
      margin={majorScale(2)}
    >
      {recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.label} />
      ))}
    </Pane>
  );
};

export default RecipeList;
