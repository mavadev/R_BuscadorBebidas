import axios from 'axios';
import { CategoriesSchema, DrinksSchema, FullDrinkResponseSchema } from '../schemas/recipe-schema';
import { Category, SearchFilter, Drink, FullDrink } from '../types/recipe-types';

export async function getCategories(): Promise<Category[]> {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
	try {
		const { data } = await axios.get(url);
		const result = CategoriesSchema.safeParse(data);
		if (result.success) return result.data.drinks;
		return [];
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw new Error('Failed to fetch categories. Please try again later.');
	}
}

export async function getDrinks(filters: SearchFilter): Promise<Drink[]> {
	const { ingredient, category } = filters;
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;

	try {
		const { data } = await axios.get(url);
		const result = DrinksSchema.safeParse(data);
		if (result.success) return result.data.drinks;
		return [];
	} catch (error) {
		console.error('Error fetching drinks:', error);
		throw new Error('Failed to fetch drinks. Please try again later.');
	}
}

export async function getRecipeByID(id: Drink['idDrink']): Promise<FullDrink | null> {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

	try {
		const { data } = await axios.get(url);
		const result = FullDrinkResponseSchema.safeParse(data);
		if (result.success && result.data.drinks[0]) return result.data.drinks[0];
		return null;
	} catch (error) {
		console.error('Error fetching full drink:', error);
		throw new Error('Failed to fetch full drink. Please try again later.');
	}
}
