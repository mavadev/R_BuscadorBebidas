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
