import { StateCreator } from 'zustand';
import { getCategories, getDrinks } from '../services/RecipeService';
import { Category, Drink, SearchFilter } from '../types/recipe-types';

export type RecipeSliceType = {
	drinks: Drink[];
	categories: Category[];
	fetchCategories: () => Promise<void>;
	searchDrinks: (filters: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = set => ({
	drinks: [],
	categories: [],
	fetchCategories: async () => {
		const categories = await getCategories();
		set(state => ({
			...state,
			categories,
		}));
	},
	searchDrinks: async filters => {
		const drinks = await getDrinks(filters);
		set(state => ({
			...state,
			drinks,
		}));
	},
});
