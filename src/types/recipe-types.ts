import { z } from 'zod';
import {
	CategoriesSchema,
	CategorySchema,
	DrinkSchema,
	DrinksSchema,
	SearchFilterSchema,
} from '../schemas/recipe-schema';

export type Category = z.infer<typeof CategorySchema>;
export type Categories = z.infer<typeof CategoriesSchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drink = z.infer<typeof DrinkSchema>;
export type Drinks = z.infer<typeof DrinksSchema>;
