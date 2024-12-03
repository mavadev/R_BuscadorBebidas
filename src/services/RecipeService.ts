import axios from 'axios';
import {
	CategoriesSchema,
	DrinksSchema,
	FullDrinkSchema,
	FullDrinkWithoutIngredientsSchema,
} from '../schemas/recipe-schema';
import { Category, SearchFilter, Drink, FullDrink, FullDrinkIngredients } from '../types/recipe-types';

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

function getIngredients(recipe: FullDrinkIngredients): Array<string> {
	const ingredients = [];

	var position = 1;
	var existNewIngredient = true;

	while (existNewIngredient) {
		const ingredient = recipe[`strIngredient${position}` as keyof FullDrinkIngredients];
		const measure = recipe[`strMeasure${position}` as keyof FullDrinkIngredients];

		if (ingredient) {
			ingredients.push(measure ? `${ingredient} - ${measure}` : ingredient);
			position++;
		} else {
			existNewIngredient = false;
		}
	}
	return ingredients;
}

export async function getRecipeByID(id: Drink['idDrink']): Promise<FullDrink | null> {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

	try {
		// Obtener bebida con ingredientes dispersos
		const { data } = await axios.get(url);
		const drink = FullDrinkWithoutIngredientsSchema.safeParse(data.drinks[0]);
		if (!drink.success) return null;

		// Convertir propiedades a propiedad de ingredientes
		const arrIngredients = getIngredients(drink.data);
		const drinkWithIngredients = { ...drink.data, arrIngredients };

		const fullDrink = FullDrinkSchema.safeParse(drinkWithIngredients);
		if (fullDrink.success && fullDrink.data) return fullDrink.data;
		return null;
	} catch (error) {
		console.error('Error fetching full drink:', error);
		throw new Error('Failed to fetch full drink. Please try again later.');
	}
}
