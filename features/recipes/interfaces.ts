export interface IRecipesState {
  recipes: IRecipe[];
  pending: boolean;
  error: boolean;
};

interface IRecipe {
  label: string,
  image: string,
  source: string,
  sourceUrl: string
}
