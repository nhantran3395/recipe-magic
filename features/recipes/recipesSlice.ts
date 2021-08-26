import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { IRecipesState } from './interfaces';

const initialState: IRecipesState = {
  recipes: [],
  isPending: false,
  isError: false,
};

const EDAMAM_BASE_URL = 'https://api.edamam.com/api/recipes/v2';

const buildRecipeSearchUrl = (searchTerm: string) => {
  const appId = process.env.NEXT_PUBLIC_EDAMAM_APP_ID;
  const appKey = process.env.NEXT_PUBLIC_EDAMAM_API_KEY;
  return `${EDAMAM_BASE_URL}?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`
}

export const searchRecipes = createAsyncThunk('recipes/searchByTerm', async (searchTerm: string) => {
  const response = await fetch(buildRecipeSearchUrl(searchTerm));
  const data = await response.json();
  const recipes = data.hits.map((hit: any) => hit.recipe);

  return recipes;
});

export const recipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(searchRecipes.pending, state => {
        state.isPending = true;
      })
      .addCase(searchRecipes.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.recipes = payload;
      })
      .addCase(searchRecipes.rejected, state => {
        state.isPending = false;
        state.isError = true;
      });
  },
});

export const selectRecipes = (state: RootState) => state.recipes;

export default recipesSlice.reducer;