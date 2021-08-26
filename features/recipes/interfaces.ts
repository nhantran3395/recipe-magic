import { IRecipe } from "../../models/recipes";

export interface IRecipesState {
  recipes: IRecipe[];
  isPending: boolean;
  isError: boolean;
};
