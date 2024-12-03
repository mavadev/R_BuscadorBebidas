import { z } from 'zod';

export const CategorySchema = z.object({
	strCategory: z.string(),
});
export const CategoriesSchema = z.object({
	drinks: z.array(CategorySchema),
});

export const SearchFilterSchema = z.object({
	ingredient: z.string(),
	category: z.string(),
});

export const DrinkSchema = z.object({
	idDrink: z.string(),
	strDrink: z.string(),
	strDrinkThumb: z.string(),
});
export const DrinksSchema = z.object({
	drinks: z.array(DrinkSchema),
});

export const FullDrinkWithoutIngredientsSchema = z.object({
	idDrink: z.string(),
	strDrink: z.string(),
	strDrinkThumb: z.string(),
	strGlass: z.string(),
	strInstructions: z.string(),
	strInstructionsES: z.string().nullable(),
	strAlcoholic: z.string(),
	strCategory: z.string(),
	strIngredient1: z.string().nullable(),
	strIngredient2: z.string().nullable(),
	strIngredient3: z.string().nullable(),
	strIngredient4: z.string().nullable(),
	strIngredient5: z.string().nullable(),
	strIngredient6: z.string().nullable(),
	strIngredient7: z.string().nullable(),
	strIngredient8: z.string().nullable(),
	strIngredient9: z.string().nullable(),
	strIngredient10: z.string().nullable(),
	strMeasure1: z.string().nullable(),
	strMeasure2: z.string().nullable(),
	strMeasure3: z.string().nullable(),
	strMeasure4: z.string().nullable(),
	strMeasure5: z.string().nullable(),
	strMeasure6: z.string().nullable(),
	strMeasure7: z.string().nullable(),
	strMeasure8: z.string().nullable(),
	strMeasure9: z.string().nullable(),
	strMeasure10: z.string().nullable(),
});

export const FullDrinkSchema = z.object({
	idDrink: z.string(),
	strDrink: z.string(),
	strDrinkThumb: z.string(),
	strGlass: z.string(),
	strInstructions: z.string(),
	strInstructionsES: z.string().nullable(),
	strAlcoholic: z.string(),
	strCategory: z.string(),
	arrIngredients: z.array(z.string()),
});
