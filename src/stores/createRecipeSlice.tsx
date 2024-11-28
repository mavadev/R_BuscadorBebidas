import { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import { Category, Recipe, SearchFilter } from '../types/recipe-types';

export type RecipeSliceType = {
	recipes: Recipe[];
	categories: Category[];
	fetchCategories: () => Promise<void>;
	searchRecipes: (filters: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = set => ({
	recipes: [],
	categories: [],
	fetchCategories: async () => {
		const categories = await getCategories();
		set(state => ({
			...state,
			categories,
		}));
	},
	searchRecipes: async filters => {
		const recipes = await getRecipes(filters);
		set(state => ({
			...state,
			recipes,
		}));
	},
});
