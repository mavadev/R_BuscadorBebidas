import { StateCreator } from 'zustand';
import { getCategories, getDrinks, getRecipeByID } from '../services/RecipeService';
import { Category, Drink, FullDrinkIngredients, SearchFilter } from '../types/recipe-types';

export type RecipeSliceType = {
	categories: Category[];
	fetchCategories: () => Promise<void>;

	drinks: Drink[];
	searchDrinks: (filters: SearchFilter) => Promise<void>;

	recipe: FullDrinkIngredients | null;
	fetchRecipeByID: (id: Drink['idDrink']) => Promise<void>;

	modalIsOpen: boolean;
	closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = set => ({
	categories: [],
	fetchCategories: async () => {
		const categories = await getCategories();
		set(() => ({
			categories,
		}));
	},
	drinks: [],
	searchDrinks: async filters => {
		const drinks = await getDrinks(filters);
		set(() => ({
			drinks,
		}));
	},
	recipe: null,
	fetchRecipeByID: async id => {
		const recipe = await getRecipeByID(id);
		set(() => ({
			recipe,
			modalIsOpen: true,
		}));
	},
	modalIsOpen: false,
	closeModal: () => {
		set(() => ({
			recipe: null,
			modalIsOpen: false,
		}));
	},
});
