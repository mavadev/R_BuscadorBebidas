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

export const FullDrinkSchema = z.object({
	idDrink: z.string(),
	strDrink: z.string(),
	strDrinkThumb: z.string(),
	strGlass: z.string(),
	strInstructionsES: z.string(),
	strAlcoholic: z.string(),
	strCategory: z.string(),
});
export const FullDrinkResponseSchema = z.object({
	drinks: z.array(FullDrinkSchema),
});
