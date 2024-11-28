import { StateCreator } from 'zustand';
import { getCategories } from '../services/RecipeService';
import { CategoryResponse } from '../types/recipe-types';

export type RecipeSliceType = {
	categories: CategoryResponse[];
	fetchCategories: () => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = set => ({
	categories: [],
	fetchCategories: async () => {
		const categories = await getCategories();
		set(state => ({
			...state,
			categories,
		}));
	},
});
