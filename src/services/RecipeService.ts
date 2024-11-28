import axios from 'axios';
import { CategoriesSchema, RecipesSchema } from '../schemas/recipe-schema';
import { Category, SearchFilter, Recipe } from '../types/recipe-types';

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

export async function getRecipes(filters: SearchFilter): Promise<Recipe[]> {
	const { ingredient, category } = filters;
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;

	try {
		const { data } = await axios.get(url);
		const result = RecipesSchema.safeParse(data);
		if (result.success) return result.data.drinks;
		return [];
	} catch (error) {
		console.error('Error fetching recipes:', error);
		throw new Error('Failed to fetch recipes. Please try again later.');
	}
}
