import { StateCreator } from 'zustand';

type Category = {};

export type RecipeSliceType = {
	categories: Category[];
	fetchCategories: () => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = () => ({
	categories: [],
	fetchCategories: async () => {
		// PEDIR CATEGORIAS A API
		console.log('SE SOLICITA CATEGORIAS');
	},
});
