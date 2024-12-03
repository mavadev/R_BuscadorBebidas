import { StateCreator } from 'zustand';
import { getCategories, getDrinks, getRecipeByID } from '../services/RecipeService';
import { Category, Drink, FullDrink, SearchFilter } from '../types/recipe-types';
import { NotificationSliceType } from './notificationSlice';

export type RecipesSliceType = {
	categories: Category[];
	fetchCategories: () => Promise<void>;

	drinks: Drink[];
	searchDrinks: (filters: SearchFilter) => Promise<void>;

	recipe: FullDrink | null;
	fetchRecipeByID: (id: Drink['idDrink']) => Promise<void>;

	modalIsOpen: boolean;
	closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipesSliceType & NotificationSliceType, [], [], RecipesSliceType> = (
	set,
	get
) => ({
	categories: [],
	fetchCategories: async () => {
		const categories = await getCategories();
		set({ categories });
	},
	drinks: [],
	searchDrinks: async filters => {
		const drinks = await getDrinks(filters);
		set({ drinks });
		get().setNotification(`Se encontraron ${drinks.length} bebidas`, 'success');
	},
	recipe: null,
	fetchRecipeByID: async id => {
		const recipe = await getRecipeByID(id);
		set({
			recipe,
			modalIsOpen: true,
		});
	},
	modalIsOpen: false,
	closeModal: () => {
		set({ modalIsOpen: false });
	},
});
