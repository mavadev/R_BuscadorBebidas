import { z } from 'zod';

export const CategoryResponseSchema = z.object({
	strCategory: z.string(),
});
export const CategoriesResponseSchema = z.object({
	drinks: z.array(CategoryResponseSchema),
});
