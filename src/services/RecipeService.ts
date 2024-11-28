import axios from 'axios';
import { CategoriesSchema, DrinksSchema } from '../schemas/recipe-schema';
import { Category, SearchFilter, Drink } from '../types/recipe-types';

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
